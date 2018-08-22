import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/services/httpservice/common.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent  {
  users: any;
  errorMessage: any;
  currentId: number = 0;
  serarchText: string ='';
  
  private gridOptions: GridOptions;
  isGridCanShow : boolean = false;
  isUserExists : boolean = true;
  private api : GridApi

  constructor( private _commonService : CommonService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute) {
                this.getUsers();
                
}

  ngOnInit() {
    //if(this._activatedRoute.snapshot.params["id"])
      //this.currentId = parseInt(this._activatedRoute.snapshot.params["id"]);
  }
  gridBinding(){
                this.gridOptions = <GridOptions>{};
                this.gridOptions.columnDefs = [
                  {
                    headerName: "User ID",
                    field: "userId",
                    width: 100,
                    checkboxSelection:true
                  },
                  {
                    headerName: "User Name",
                    field: "userName",
                    width: 100,
                    editable: true
                  },
                  {
                    headerName: "Password",
                    field: "password",
                    width: 100
                  },
                  {
                    headerName: "Email",
                    field: "email",
                    width: 100
                  }
                ];
                this.gridOptions.rowData =  this.users ;
                if(this.users != undefined)
                  this.isUserExists = true;
                  else
                   this.isUserExists = false;
                this.isGridCanShow = true;
                
}
  getUsers(){
    this._commonService.get('http://localhost:53818//api/user').subscribe(
        async data =>{
          this.users = await data;
          this.gridBinding();
          },
        error => { debugger;
          this.errorMessage = error
        }
    )
  }
 
  deleteSelectedUsers(){
      const selectedRows = this.api.getSelectedRows();
      
      const deleteSubscriptions = selectedRows.map((rowToDelete) =>{
            return this._commonService.delete('http://localhost:53818//api/user/DeleteUser?userId='+ rowToDelete.userId)       
      });

      forkJoin(...deleteSubscriptions)
                .subscribe(results=>{
                  
                  this.api.updateRowData({
                    remove: selectedRows
                  });
                })
  } 

  onCellValueChanged(params){
    this._commonService.put('http://localhost:53818//api/user/UpdateUser',JSON.stringify(params.data))
        .subscribe(res => {
          this.getUsers();
         }, 
         error => this.errorMessage = error );
  }

  onGridReady(params): void{
      this.api = params.api;
  }

  add(){
    this._router.navigate(['users/add']);
  }
  edit(userId){
    this._router.navigate(['users/edit/' + userId])
  }
  delete(userId){
    var ans = confirm("Do you want to delete customer with Id: " + userId);
    if(ans){
      this._commonService.delete('http://localhost:53818//api/user/DeleteUser?userId='+ userId)
          .subscribe(  data=> {
            var index = this.users.findIndex(x=>x.userId == userId);
            this.users.splice(index, 1);
          }, error=> this.errorMessage = error )
    }
  }

  editCell(cellval){
    console.log(cellval);
    console.log(cellval);
  }
}