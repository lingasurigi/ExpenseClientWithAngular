import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addchitdetails',
  templateUrl: './addchitdetails.component.html',
  styleUrls: ['./addchitdetails.component.css']
})
export class AddChitDetailsComponent implements OnInit {

  chitDetailsForm: FormGroup;
  userNames:any;

  constructor(private _fb: FormBuilder, ) { 

    this.chitDetailsForm = this._fb.group({
      chitName: [''],
      agentName: [''],
      messageDate: [''],
      paidDate: [''],
      extraAmount: [''],
      //address: ['', [Validators.required]],
      dividend: [''],
      otherNumbers: [''],
      receiptNumber: [''],
      checkNumber: [''],
      comments: [''],
      status: [''],
      receip: [''],
      //phone: ['', [Validators.pattern("[1-9][0-9]{9}")]],
      userImage: File
      
    })

  }

  
  ngOnInit() {
    this.userNames =  [
      { "value": 1, "text": "Table" },
      { "value": 2, "text": "Chair" },
      { "value": 3, "text": "Light" }
    ];
  }

}
