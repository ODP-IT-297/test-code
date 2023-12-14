/* console.log("Aziz") */

// Ini code buat ahmad
// let namaSaya = "Ahmad";
// let nama;

// const uang = 1
// uang = 2

// nama = namaSaya
// console.log(nama)

// let a = 1
// let ab = 2
// let result = a + ab

// console.log(a + ab)

// let _ipk = 3.2
// let ipk1 = "Rizal"
// let ipk2 = true

// if(ipk > ipk1){
//     console.log('Baik')
// } else if (ipk > ipk2){
//     console.log("Cumlaude")
// } else {
//     console.log("Kurang")
// }

// let array = [40, 20, 10, 25, 79, 54]
// let array = ["andi", "krisna", "barjo"]

// console.log(array[2])
// console.log(array[array.length - 1])
// console.log(array.length)

// make string
// console.log(array.toString())
// console.log(typeof array[2].toString())

// pop - remove the last element
// console.log(array.pop())
// console.log(array);

// push - add new element to array (at the end)
// console.log(array.push(6))
// console.log(array);

// shift - remove first array
// console.log(array.shift())
// console.log(array);

// unshift - add new element to array (at the beginning)
// console.log(array.unshift(0))
// console.log(array);

// sort
// console.log(array.sort((a, b) => b - a))

// function name(value){
    // logic here
//  console.log(value);
// }

// name(array)
// console.log(array.reverse());

// let a = false // integer
// let  b = 0 // string

// console.log(a *= b);
// console.log(b++);

// console.log(true ? '1' : '2');
// console.log(!false);

// function cetakBintang(jumlahBaris) {
//     if (jumlahBaris % 2 === 0) {
//       // Jumlah baris harus ganjil untuk pola tengah yang bagus
//       jumlahBaris++;
//     }
  
//     const tengah = Math.floor(jumlahBaris / 2);
  
//     for (let i = 0; i < jumlahBaris; i++) {
//       if (i === tengah) {
//         console.log('*'.repeat(jumlahBaris)); // Baris tengah
//       } else {
//         console.log(' '.repeat(tengah) + '*'); // Bagian atas dan bawah
//       }
//     }
//   }
  
//   cetakBintang(4);

// function cetakSegitigaTengah(jumlahBaris, condition) {
//     if(condition == "terbalik"){
//         for (let i = jumlahBaris; i >= 1; i--) {
//             let spasi = ' '.repeat(jumlahBaris - i);
//             let bintang = '*'.repeat(i);
//             console.log(spasi + bintang);
//         }
//     } else {
//         for (let i = 1; i <= jumlahBaris; i++) {
//             let spasi = ' '.repeat(jumlahBaris - i);
//             let bintang = '*'.repeat(i);
//             console.log(spasi + bintang);
//           }
//     }
    
//   }
  
//   cetakSegitigaTengah(4);
//   cetakSegitigaTengah(4, "terbalik");

//   function cetakSegitigaTengahKiri(jumlahBaris) {
//     
//   }
  
//   cetakSegitigaTengahKiri(4);


let customers = []; // This array will hold customer objects

function addCustomer(name, accountNumber) {
  let newCustomer = {
    name: name,
    accountNumber: accountNumber,
    balance: 0,
    transactionHistory: []
  };
  customers.push(newCustomer);
}

function findCustomerByAccountNumber(accountNumber) {
  return customers.find(customer => customer.accountNumber === accountNumber);
}

function deposit(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    customer.balance += amount;
    customer.transactionHistory.push({ date: Date.now(), type: 'deposit', amount: amount });
    console.log(`Deposit of ${amount} to account number ${accountNumber} was successful.`);
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function withdraw(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    if (customer.balance >= amount) {
      customer.balance -= amount;
      customer.transactionHistory.push({ type: 'withdrawal', amount: amount });
      console.log(`Withdrawal of ${amount} from account number ${accountNumber} was successful.`);
    } else {
      console.log(`Insufficient balance for withdrawal from account number ${accountNumber}.`);
    }
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function performTransaction(accountNumber, amount) {
    let customer = findCustomerByAccountNumber(accountNumber);
    if (!customer) {
      return "Account not found";
    }
  
    if (customer.balance + amount < 0) {
      return "Insufficient balance";
    }
  
    customer.balance += amount;
    customer.transactionHistory.push({
      type: amount < 0 ? 'withdrawal' : 'deposit',
      amount: amount
    });
  
    return "Transaction successful";
  }
  
  function validateCustomerData(name, accountNumber) {
    if (customers.some(customer => customer.accountNumber === accountNumber)) {
      return false; // Account number is not unique
    }
    // Add more validation as needed
    return true;
  }
  
  function editCustomerInfo(accountNumber, {}) {
    let customer = findCustomerByAccountNumber(accountNumber);
    if (customer) {
      Object.assign(customer, newInfo);
      return "Customer info updated";
    } else {
      return "Customer not found";
    }
  }
  
  function getHighBalanceCustomers(minimumBalance) {
    return customers.filter(customer => customer.balance >= minimumBalance);
  }
  
  function calculateTotalBalance() {
    return customers.reduce((total, customer) => total + customer.balance, 0);
  }

  function bikinNama(){
    console.log("Okta")
  }
  

addCustomer('John Doe', '123456789');
deposit('123456789', 1000);
withdraw('123456789', 500);

console.log(customers);

  
  
  