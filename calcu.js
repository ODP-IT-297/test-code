function calculator(){
    let amount = (document.forms["calculatorForm"]["amount"].value)
    let rate = (document.forms["calculatorForm"]["rate"].value)
    let bunga = (document.forms["calculatorForm"]["bunga"].value)
    
    // console.log(amount)
    // console.log(rate)
    // console.log(bunga)

    let netsalary = new SavingsCalculator(amount, rate, bunga)
    
    document.getElementById("resultOutput").innerHTML= netsalary.calculateInterest()
}


class SavingsCalculator{
    constructor(initial_Amount, interest_Rate, period1){
        this._initialAmount= initial_Amount;
        this._interestRate= interest_Rate;
        this._period= period1;
    }

    get initialAmount(){
        return this._initialAmount;
    }

    set initialAmount(value){
        this._initialAmount = value;
    }

    get interestRate(){
        return this._interestRate;
    }

    set interestRate(value){
        this._interestRate =value;
    }

    get period(){
        return this._period;
    }

    set period(value){
        this._period = value;
    }

    calculateInterest(){
        return (this._initialAmount * this._interestRate * this._period)}

    calculateYearlyInterest(){
        const yearlyInterest = []
        let totalAmount = this._initialAmount;

        for(let year = 1; year <= this._period; year++){
            const interest = (totalAmount * this._interestRate)/100;
            totalAmount+= interest;
            yearlyInterest.push({
                year, interest: interest.toFixed(2), totalAmount: totalAmount.toFixed(2)
            })
        }
        return yearlyInterest
    }

}

class ChartManager{
    constructor(){
        this.chart = null;
    }
createchart(data){
    const ctx= document.getElementById('chart').getContext('2d');
    this.chart = new chart(ctx,{
        type: 'bar',
        data: {
            labels: data.map(entry => 'year ${entry.year}'),
            datasets: [{
                label: 'Yearly Interest',
                data: data.map(entry=> entry.interest),
                backgroundcolor: 'rgba(75, 192, 192, 0, 2)',
                bordercolor: 'rgba(75, 192, 192, 1)',
                borderwidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtzero: true
                }
            }
        }
    });
}
}
const chartManager = new ChartManager();
    function calculateInterest() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const period = parseFloat(document.getElementById('period').value);
    const calculator = new SavingsCalculator(initialAmount, interestRate, period);
    const yearlyInterest = calculator.calculateYearlyInterest();
    document.getElementById('result').innerHTML = `Total Interest Earned: $${yearlyInterest[yearlyInterest.length - 1].totalAmount}`;
    // Tambahkan pemanggilan fungsi untuk membuat atau memperbarui grafik
    if (!chartManager.chart) {
    chartManager.createchart(yearlyInterest);
    } else {
    chartManager.updateChart(yearlyInterest);
    }
    }
// console.log(calculateInterest)