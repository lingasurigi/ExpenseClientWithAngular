import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GridOptions } from 'ag-grid';
import "ag-grid-enterprise";
import { CommonService } from '../../../common/services/httpservice/common.service';
import { GenderCellRenderer } from '../../../common/renderer.component';

@Component({
  selector: 'app-chit',
  templateUrl: './listchitdetails.component.html'
})
export class ListChitDetailsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private frameworkComponents;
  chitDetails : any;
  errorMessage: any;
  private gridOptions: GridOptions;
  isChitDetailsExist: boolean = false;
  isGridCanShow: boolean = false;

  constructor(private _commonService : CommonService, private _router: Router, private _activatedRoute: ActivatedRoute)
  {
         this.getChitDetails();     
  }

  ngOnInit() {
  }

  getChitDetails(){
    this._commonService.get('http://localhost:53818/api/chits/chitdetails').subscribe(
        async data =>{
          this.chitDetails = await data;
          this.gridBinding();
          },
        error => { debugger;
          this.errorMessage = error
        }
    )
  }
  addChitDetails(){
    var newItem = this.createNewRowData();
    var res = this.gridApi.updateRowData({ add: [newItem] });

  }

  gridBinding(){
    this.gridOptions = <GridOptions>{};
    
    this.gridOptions.columnDefs = [
      {
        headerName: "Chit Details ID",
        field: "chitDetailsId",
        width: 100,
        hide: true,
        checkboxSelection:true
      },
      {
        headerName: "User Name",
        field: "customerName",
        width: 100
      },
      {
        headerName: "Chit Name",
        field: "chitName",
        width: 100
      },
      {
        headerName: "Agent Name",
        field: "agentName",
        width: 100
      },
      {
        headerName: "Month/Year To Pay",
        field: "monthYear",
        width: 100
      },
      {
        headerName: "Message Date",
        field: "messageDate",
        width: 100
      },
      {
        headerName: "Paid Date",
        field: "paidDate",
        width: 100
      },
      {
        headerName: "Actual Amount",
        field: "actualAmount",
        width: 100,
        editable: true
      },
      {
        headerName: "Paid Amount",
        field: "paidAmount",
        width: 100,
        editable: true
      },
      {
        headerName: "Pending Amount",
        field: "pendingAmount",
        width: 100
      },
      {
        headerName: "Extra Amount",
        field: "extraAmount",
        width: 100
      },
      {
        headerName: "Dividend",
        field: "dividend",
        width: 100
      },
      {
        headerName: "Other Numbers",
        field: "otherNumbers",
        width: 100
      },
      {
        headerName: "Receipt Number",
        field: "receiptNumber",
        width: 100
      },
      {
        headerName: "Check Number",
        field: "checkNumber",
        width: 100
      },
      {
        headerName: "Status",
        field: "statusName",
        width: 100
      },
      {
        headerName: "Comments",
        field: "comments",
        width: 100
      }
    ];

    this.gridOptions.rowData =  this.chitDetails ;

    if(this.chitDetails != undefined)
      this.isChitDetailsExist = true;
      else
       this.isChitDetailsExist = false;
       
    this.isGridCanShow = true;
    debugger;
    this.frameworkComponents = { genderCellRenderer: GenderCellRenderer };


    // this.gridOptions.components = [
    //   { genderCellRenderer : GenderCellRenderer }
    // ];
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
 
  createNewRowData(){
    var newData = {
      chitDetailsId: 3,
      customerName: 'Linga',
      chitName:'20 Thousand',
      agentName:'Santhu',
      actualAmount:1250,
      messageDate:'2018-08-22',
      paidDate:'2018-08-22',
      paidAmount:1250,
      pendingAmount:0,
      extraAmount:0,
      dividend:250,
      otherNumbers:'',
      receiptNumber:'',
      checkNumber:'',
      statusName:'Paid',
      comments:'Paid by me'
    }
  
    return newData;
  }

}

// function GenderCellRenderer() {
  
// }

// GenderCellRenderer.prototype.getGui = function () {
//   return this.eGui;
// };

// GenderCellRenderer.prototype.init = function (params) {
//   this.eGui = document.createElement('span');
//   if (params.value !== "" || params.value !== undefined || params.value !== null) {
//       var gender = '<img border="0" width="15" height="10" src="https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/images/' + params.value.toLowerCase() + '.png">';
//       this.eGui.innerHTML = gender + ' ' + params.value;
//   }
// };