import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../common/services/httpservice/common.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userForm: FormGroup;
  title: string = "Add";
  userId: number = 0;
  errorMessage: any;
  submitted: boolean = false;
  _ref:any;
  selectedFile: File;

  constructor(private _fb: FormBuilder, 
              private _avRoute: ActivatedRoute,
              private _commonService: CommonService,
              private _router: Router) { 
    
    if(this._avRoute.snapshot.params["userId"]){
      debugger;
      this.userId = parseInt( this._avRoute.snapshot.params["userId"]);
      console.log(this.userId);
        this.title = 'Edit';
    }

    this.userForm = this._fb.group({
      userId: this.userId > 0 ? this.userId : 0,
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required]],
      //address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      isActive: ['', [Validators.required]],
      //phone: ['', [Validators.pattern("[1-9][0-9]{9}")]],
      userImage:['']
      
    })
  }

  ngOnInit() {
    if(this.userId > 0){
      debugger;
        this._commonService.get('http://localhost:53818//api/user/EditUser?userId='+ this.userId)
          .subscribe(resp => {
                              debugger;
                              this.userForm.setValue(resp)
                            }
                              , error => this.errorMessage = error);
          
    }
  }

  save(){
    debugger;
    if(this.userForm.valid){
      this.userForm.value.userImage = this.selectedFile;
      //console.log(this.userForm.value.userImage);
      debugger;
      let formData: FormData = new FormData();  
      formData.append('uploadFile', this.selectedFile, this.selectedFile.name);  

      formData.append('user',this.userForm.value);

      this._commonService.post('http://localhost:53818//api/user/SaveUser',JSON.stringify(formData))
        .subscribe(custId => {
          debugger;
            //alert('Saved Successfully!')
            //this._router.navigate(['customers', {id: custId}]);
            this._router.navigateByUrl('listusers');
         }, error => this.errorMessage = error )
    }
    else{
      this.submitted = false;
      event.preventDefault()
    }

    
}

onFileSelected(event){
  debugger;
  this.selectedFile = event.target.files[0];
}
  cancel(){
    this._router.navigate(["customers", {id: this.userId}]);
  }

  get firstName() { return this.userForm.get('firstName'); }  
  get lastName() { return this.userForm.get('lastName'); }  
  get userName() { return this.userForm.get('userName'); }  
  get password() { return this.userForm.get('password'); }  
	get email() { return this.userForm.get('email'); }
}
