import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/httpservice/common.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-chit',
  templateUrl: './chit.component.html',
  styleUrls: ['./chit.component.css']
})
export class ChitComponent implements OnInit {

  chitDetails : any;
  errorMessage: any;
  private gridOptions: GridOptions;
  isChitDetailsExist: boolean = false;
  isGridCanShow: boolean = false;

  constructor(private _commonService : CommonService, private _router: Router, private _activatedRoute: ActivatedRoute)
  {
         this.getChits();     
  }

  ngOnInit() {
  }

  getChits(){
    this._commonService.get('http://localhost:53818//api/user').subscribe(
        async data =>{
          this.chitDetails = await data;
          this.gridBinding();
          },
        error => { debugger;
          this.errorMessage = error
        }
    )
  }

  gridBinding(){
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: "User ID",
        field: "userId",
        width: 100,
        hide: true,
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
    this.gridOptions.rowData =  this.chitDetails ;
    if(this.chitDetails != undefined)
      this.isChitDetailsExist = true;
      else
       this.isChitDetailsExist = false;
    this.isGridCanShow = true;
    
  }
}
