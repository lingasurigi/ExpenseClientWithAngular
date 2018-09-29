import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonService } from '../../../common/services/httpservice/common.service';

@Component({
  selector: 'app-addchitdetails',
  templateUrl: './addchitdetails.component.html',
  styleUrls: ['./addchitdetails.component.css']
})
export class AddChitDetailsComponent implements OnInit {

  chitDetailsForm: FormGroup;
  users: any;
  chits: any;
  usersDropDown = [];
  chitsDropDown = [];
  errorMessage: any;
  isDataExistForUserDD: boolean = false;
  isDataExistForChitsDD: boolean = false;
  constructor(private _fb: FormBuilder, private _commonService: CommonService) {

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
    this._commonService.get('http://localhost:53818//api/user').subscribe(
      async res => {
        this.users = await res;
        this.UsersDropDownBinding();
      },
      error => {
        debugger;
        this.errorMessage = error
      }
    )

    this._commonService.get('http://localhost:53818//api/chits').subscribe(
      async res => {
        this.chits = await res;
        this.ChitsDropDownBinding();
      },
      error => {
        debugger;
        this.errorMessage = error
      }
    )
    // this.userNames =  [
    //   { "value": 1, "text": "Table" },
    //   { "value": 2, "text": "Chair" },
    //   { "value": 3, "text": "Light" }
    // ];

  }
  public UsersDropDownBinding() {
    if (this.users != null) {
      for (var i = 0; i < this.users.length; i++) {
        this.usersDropDown.push({ "value": this.users[i].userId, "text": this.users[i].userName });
      }
      this.isDataExistForUserDD = true;
    }
  }

  public ChitsDropDownBinding() {
    if (this.chits != null) {
      for (var i = 0; i < this.chits.length; i++) {
        this.chitsDropDown.push({ "value": this.chits[i].chitId, "text": this.chits[i].chitName });
      }
      this.isDataExistForChitsDD = true;
    }
  }
}
