//? Bank App and prototype

//TODO>> prototype
Array.prototype.myPush = function (item) {
  this[this.length] = item;
};
const fruits = ["🍇", "🍉", "🍊", "🍌", "🍒", "🍓", "🍐", "🍎", "🥝"];
fruits.myPush("🥭");
fruits.myPush("🍋");
fruits.myPush("🍏");
// console.log(fruits)

//TODO>> Bank App
class Bank {
    //! property
  #balance;
  //! constructor
  constructor(balance) {
    this.#balance = balance;
  }
  //! Methods
  deposit(amount) {
    //* guard clause with condition
    if (amount > 0) {
      this.#balance += amount;
      console.log(`✅deposit: $${amount}`);
      console.log(`current money is: $${this.#balance}`);
    } else console.log("❌ Enter a valid amount!");
  }
  withdraw(amount) {
    //* guard clause with condition
    if (this.#balance > amount) {
      this.#balance -= amount;
      console.log(`✅withdraw: $${amount}`);
      /* let withdraw = {withdraw: amount}
            console.log(withdraw)
            console.log({withdraw: amount})*/
      console.log(`current money is: $${this.#balance}`);
    } else console.log("❌ you can't withdraw more than you have!");
  }
  getBalance() {
    return this.#balance
  }
}
//! create an Object
let ammar = new Bank(2000);
// ammar.deposit(2000);
// ammar.withdraw(5000);
// console.log(ammar.getBalance())
//! Handle Events..
const input = document.getElementById('input')
const deposit = document.getElementById('deposit')
const withdraw = document.getElementById('withdraw')
const error = document.getElementById('error')
const balance = document.getElementById('balance')

//! deposit button action
deposit.addEventListener('click' , () => {
    // console.log('run')
    if((Number(input.value)) > 0){
    ammar.deposit(parseInt(input.value, 10)) //! The second argument, 10 for decimal
    error.innerHTML = `<p style='color: green'>✅deposit: $${input.value}</p>`
    balance.innerText = `Balance: $${ammar.getBalance()}`
    }else{
    error.innerHTML = `<p style='color: red'>❌ Enter a valid amount!</p>`
    }

})

//! withdraw button action
withdraw.addEventListener('click' , () => {
    // console.log('run')
    if((Number(input.value)) < ammar.getBalance()){
    ammar.withdraw(parseInt(input.value, 10)) //! The second argument, 10 for decimal
    error.innerHTML = `<p style='color: green'>✅withdraw: $${input.value}</p>`
    balance.innerText = `Balance: $${ammar.getBalance()}`
    }else{
    error.innerHTML = `<p style='color: red'>❌ you can't withdraw more than you have!</p>`
    }
})

