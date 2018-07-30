import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: any;
  errorMessage: any;
  currentId: number = 0;

  serarchText: string ='';
  
  constructor( private _userService : UserService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //if(this._activatedRoute.snapshot.params["id"])
      //this.currentId = parseInt(this._activatedRoute.snapshot.params["id"]);
    this.getUsers();
  }

  getUsers(){
    this._userService.get('http://localhost:53818//api/user').subscribe(
        data =>{
          debugger;
           this.users = data;
           console.log(this.users)
          },
        error => { debugger;
          this.errorMessage = error
        }
    )
  }

  add(){
    this._router.navigate(['customers/add']);
  }
  edit(id){
    this._router.navigate(['customers/edit/' + id])
  }
  delete(id){
    var ans = confirm("Do you want to delete customer with Id: " + id);
    if(ans){
      this._userService.delete(id)
          .subscribe(  data=> {
            var index = this.users.findIndex(x=>x.id == id);
            this.users.splice(index, 1);
          }, error=> this.errorMessage = error )
    }
  }
}
