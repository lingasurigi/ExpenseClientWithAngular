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
  chits: any;
  usersDropDown = [];
  chitsDropDown = [];
  errorMessage: any;
  isDataExistForUserDD: boolean = false;
  isDataExistForChitsDD: boolean = false;
  chitDetail: ChitDetails;
  submitted: boolean = false;
  userId: string = "userId";
  chitId: string = "chitId";
  agentId: string = "agentId";
  constructor(private _fb: FormBuilder, private _commonService: CommonService,private _router: Router) {

    this.chitDetailsForm = this._fb.group({
      //chitName: [''],
      customerId:[''],
      chitId: [''],
      agentId: [''],
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

    
    // this.userNames =  [
    //   { "value": 1, "text": "Table" },
    //   { "value": 2, "text": "Chair" },
    //   { "value": 3, "text": "Light" }
    // ];

  }
  onSelectAgent(agentId){
    this._commonService.get('http://localhost:53818//api/master?agentId=' + agentId).subscribe(
      async res => {
        this.chits = await res;
        this.ChitsDropDownBinding();
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

  public ChitsDropDownBinding() {
    if (this.chits != null) {
      for (var i = 0; i < this.chits.length; i++) {
        this.chitsDropDown.push({ "value": this.chits[i].agentChitInfoId, "text": this.chits[i].agentChitInfo });
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
