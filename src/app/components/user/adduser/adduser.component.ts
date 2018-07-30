import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup;
  title: string = "Add";
  id: number = 0;
  errorMessage: any;
  submitted: boolean = false;
  _ref:any;
  constructor(private _fb: FormBuilder, 
              private _avRoute: ActivatedRoute,
              private _userService: UserService,
              private _router: Router) { 
    
    if(this._avRoute.snapshot.params["id"]){
      this.id = parseInt( this._avRoute.snapshot.params["id"]);
      console.log(this.id);
        this.title = 'Edit';
    }

    this.userForm = this._fb.group({
      id: 0,
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      isActive: ['', [Validators.required]],
      //phone: ['', [Validators.pattern("[1-9][0-9]{9}")]],
      
    })
  }

  ngOnInit() {
    // if(this.id > 0){
    //     this._userService.getCustomerById(this.id)
    //       .subscribe(resp => this.userForm.setValue(resp)
    //                , error => this.errorMessage = error);
          
    // }
  }

  save(){
    debugger;
    if(!this.userForm.valid){
      this.submitted = true;
    

    this._userService.post('http://localhost:53818//api/user/SaveUser',JSON.stringify(this.userForm.value))
        .subscribe(custId => {
          debugger;
            //alert('Saved Successfully!')
            this._router.navigate(['customers', {id: custId}]);
         }, error => this.errorMessage = error )
        }

  }

  cancel(){
    this._router.navigate(["customers", {id: this.id}]);
  }

  get firstName() { return this.userForm.get('firstName'); }  
  get lastName() { return this.userForm.get('lastName'); }  
  get userName() { return this.userForm.get('userName'); }  
  get password() { return this.userForm.get('password'); }  
	get email() { return this.userForm.get('email'); }
}
