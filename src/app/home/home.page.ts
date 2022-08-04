import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;
  amount: number;
  expenseName: any = [];
  expenseAmount: any =[];
  total =0;

  constructor() {}
onSave() {
  const addedName = this.name;
  const addedAmount = this.amount;
  console.log(addedName, addedAmount);


 this.expenseName.push(this.name);
 this.expenseAmount.push(this.amount);
this.total += Number(this.amount);
}
}
