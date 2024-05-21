import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountComponent,FormsModule,CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  accType:string="Savings"
  stat:string="Loyal"

  accounts:account[]=[{accountNumber:101,acholderName:"Senthil",typeofAccount:"Savings",amount:45000,bankname:"ICICI",status:"Active"},
    {accountNumber:102,acholderName:"Kumar",typeofAccount:"NRI",amount:47000,bankname:"BOI",status:"InActive"},
    {accountNumber:103,acholderName:"Cheran",typeofAccount:"Current",amount:60000,bankname:"SBI",status:"Active"},
    {accountNumber:104,acholderName:"Manoj",typeofAccount:"Savings",amount:55000,bankname:"Axis",status:"Active"},
    {accountNumber:105,acholderName:"Priya",typeofAccount:"Current",amount:80000,bankname:"Axis",status:"Active"},
    {accountNumber:106,acholderName:"Abinaya",typeofAccount:"NRI",amount:75000,bankname:"BOI",status:"Active"},
    {accountNumber:107,acholderName:"Hari",typeofAccount:"NRI",amount:90000,bankname:"HDFC",status:"active"},
    {accountNumber:108,acholderName:"Brindha",typeofAccount:"Current",amount:32000,bankname:"SBI",status:"InActive"},
    {accountNumber:109,acholderName:"Harshita",typeofAccount:"Current",amount:54000,bankname:"HDFC",status:"Active"},
    {accountNumber:110,acholderName:"Udhaya",typeofAccount:"Savings",amount:43000,bankname:"ICICI",status:"Inactive"}
  ]
}

export class account {
  accountNumber:number;
  acholderName:String;
  typeofAccount:String;
  amount:number;
  bankname:String;
  status:String

  constructor(accountNumber:number,acholderName:String,typeofAccount:String,amount:number,bankname:String,status:String){
      this.accountNumber=accountNumber;
      this.acholderName=acholderName;
      this.typeofAccount=typeofAccount;
      this.amount=amount;
      this.bankname=bankname;
      this.status=status
  }
}