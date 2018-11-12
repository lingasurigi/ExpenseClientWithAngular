import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonService } from '../../../common/services/httpservice/common.service';
import { ChitDetails } from '../../models/chitdetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addchitdetails',
  templateUrl: './addchitdetails.component.html',
  styleUrls: ['./addchitdetails.component.css']
})
export class AddChitDetailsComponent implements OnInit {

  chitDetailsForm: FormGroup;
  users: any;
  agentChitInfo: any;
  months: any;
  years: any;
  status: any;
  payments: any;
  usersDropDown = [];
  agentChitInfoDropDown = [];
  statusDropDown = [];
  paymentsDropDown = [];
  monthsDropDown = [];
  yearsDropDown = [];
  errorMessage: any;
  isDataExistForUserDD: boolean = false;
  isDataExistForChitsDD: boolean = false;
  isPaid: boolean = false;
  isPaidByCheck: boolean = false;
  chitDetail: ChitDetails;
  submitted: boolean = false;
  userId: string = "userId";
  agentChitInfoId: string = "agentChitInfoId";
  agentId: string = "agentId";
  statusId: string = "statusId";
  paymentTypeId: string = "paymentTypeId";
  constructor(private _fb: FormBuilder, private _commonService: CommonService,private _router: Router) {

    this.chitDetailsForm = this._fb.group({
      //chitName: [''],
      customerId:[''],
      agentChitInfoId: [''],
      agentId: [''],
      messageDate: [''],
      monthId: [''],
      yearId: [''],
      paidDate: [''],
      actualAmount: [''],
      paymentTypeId: [''],
      paidAmount: [''],
      extraAmount: [''],
      //address: ['', [Validators.required]],
      dividend: [''],
      otherNumbers: [''],
      receiptNumber: [''],
      checkNumber: [''],
      comments: [''],
      statusId: [''],
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

    this._commonService.get('http://localhost:53818//api/master').subscribe(
      async res => {
        this.status = await res;
        this.StausDropDownBinding();
      },
      error => {
        debugger;
        this.errorMessage = error
      }
    )

    this._commonService.get('http://localhost:53818//api/master/payments').subscribe(
      async res => {
        this.payments = await res;
        this.PaymentsDropDownBinding();
      },
      error => {
        debugger;
        this.errorMessage = error
      }
    )

    this._commonService.get('http://localhost:53818//api/master/months').subscribe(
      async res => {
        this.months = await res;
        this.MonthsDropDownBinding();
      },
      error => {
        debugger;
        this.errorMessage = error
      }
    )

    this._commonService.get('http://localhost:53818//api/master/years').subscribe(
      async res => {
        this.years = await res;
        this.YearsDropDownBinding();
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
  onSelectStatus(status){
      if(status == "1")
          this.isPaid = true;
      else
          this.isPaid = false;
  }
  onSelectPaymentType(paymentType){
    if(paymentType == "2")
        this.isPaidByCheck = true;
    else
        this.isPaidByCheck = false;
  }
  onSelectAgent(agentId){
    this.agentChitInfoDropDown = [];
    this._commonService.get('http://localhost:53818//api/master?agentId=' + agentId).subscribe(
      async res => {
        this.agentChitInfo = await res;
        this.AgentChitInfoDropDownBinding();
      },
      error => {
        debugger;
        this.errorMessage = error
      }
    )
  }
  public UsersDropDownBinding() {
    if (this.users != null) {
      for (var i = 0; i < this.users.length; i++) {
        this.usersDropDown.push({ "value": this.users[i].userId, "text": this.users[i].userName });
      }
      this.isDataExistForUserDD = true;
    }
  }

  public StausDropDownBinding() {
    if (this.status != null) {
      for (var i = 0; i < this.status.length; i++) {
        this.statusDropDown.push({ "value": this.status[i].statusId, "text": this.status[i].statusName });
      }
      this.isDataExistForUserDD = true;
    }
  }

  public PaymentsDropDownBinding() {
    if (this.payments != null) {
      for (var i = 0; i < this.payments.length; i++) {
        this.paymentsDropDown.push({ "value": this.payments[i].paymentTypeId, "text": this.payments[i].paymentTypeName });
      }
      this.isDataExistForUserDD = true;
    }
  }

  public AgentChitInfoDropDownBinding() {
    if (this.agentChitInfo != null) {
      for (var i = 0; i < this.agentChitInfo.length; i++) {
        this.agentChitInfoDropDown.push({ "value": this.agentChitInfo[i].agentChitInfoId, "text": this.agentChitInfo[i].agentChitInfo });
      }
      this.isDataExistForChitsDD = true;
    }
  }

  public MonthsDropDownBinding() {
    if (this.months != null) {
      for (var i = 0; i < this.months.length; i++) {
        this.monthsDropDown.push({ "value": this.months[i].monthId, "text": this.months[i].monthName });
      }
      this.isDataExistForChitsDD = true;
    }
  }

  public YearsDropDownBinding() {
    if (this.years != null) {
      for (var i = 0; i < this.years.length; i++) {
        this.yearsDropDown.push({ "value": this.years[i].yearId, "text": this.years[i].yearNumber });
      }
      this.isDataExistForChitsDD = true;
    }
  }

  save(){
    debugger;
    if(this.chitDetailsForm.valid){
      debugger;
      this.chitDetail = this.chitDetailsForm.value;
      //this.chitDetail.courseFile = this.selectedFile;
      //this.userForm.value.userImage = this.selectedFile;
      //console.log(this.userForm.value.userImage);
      debugger;
      //let formData: FormData = new FormData();  
      //formData.append('uploadFile', this.selectedFile);  

      //formData.append('user',this.userForm.value);

      //this._commonService.post('http://localhost:53818//api/user/SaveUser',JSON.stringify(this.userForm.value))
      this._commonService.post('http://localhost:53818//api/chits/SaveChitDetails',JSON.stringify(this.chitDetail))
        .subscribe(custId => {
          debugger;
            //alert('Saved Successfully!')
            //this._router.navigate(['customers', {id: custId}]);
            this._router.navigateByUrl('listchitdetails');
         }, error => this.errorMessage = error )
    }
    else{
      this.submitted = false;
      event.preventDefault()
    }

    
}
}
