import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // name!: string;
  // amount!: number;
  // newExpense: any;

  constructor() {}

  let nameButton = document.querySelector('#name');
  let amountButton = document.querySelector('#amount');
  let addbutton = document.querySelector('#addbutton');

  addbutton.addEventListener('click', () => {
    const addedName = nameButton;
    const addedAmount = amountButton;

    // if(addedName.length <= 0 || addedAmount <=0 || addedAmount.trim().length <= 0 ){
    //   return;
    // }
    console.log(addedName, addedAmount);

  });

  // addData(): void {
  //   const newExp = {
  //     name: this.name,
  //     amount: this.amount,
  //   };

  //   this.newExpense.add(newExp);
  //   console.log(this.name);
  //   console.log(this.amount);
  // }

}
