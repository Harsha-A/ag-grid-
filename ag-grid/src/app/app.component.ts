import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid';
  paginationPageSize = 25; // Include Pagination size attribute in html 
  // columnDefs = [
  
  // {field: "completed", sortable: true, filter: true, checkboxSelection: true,headerCheckboxSelection: true, resizable: true},
  //   {field: "id", sortable: true,filter: true,resizable: true},
  //   {field: "title", sortable: true,filter: true,resizable: true},
  //   {field: "userId", sortable: true,filter: true,resizable: true}
  // ];

  //If columnDefs and other properties are used as private then write template/html definition in .ts file itself.
  columnDefs = [
    {field: "completed", checkboxSelection: true,headerCheckboxSelection: true,rowDrag:true},
      {field: "id"},
      {field: "title"},
      {field: "userId"}
    ];
    
//Example foR NOT SO GO CODING

// columnDefs = [
  
  // {field: "completed", sortable: true, filter: true, checkboxSelection: true,headerCheckboxSelection: true, resizable: true},
  //   {field: "id", sortable: true,filter: true,resizable: true},
  //   {field: "title", sortable: true,filter: true,resizable: true},
  //   {field: "userId", sortable: true,filter: true,resizable: true}
  // ];

//Instead use defaultColDef

    //defaultColDef : Instead of defining column operation in each columnDefs , define it only once in defaultColDef
  defaultColDef = {
    width: 300,
    sortable: true,
    resizable: true,
    filter: true,
    // rowDrag: true //make rowDrag true if u want all 4 columns to have rowDrag Else write rowDrag only for 1 column as above
  };

  rowData :  any;
  apiurl = "https://jsonplaceholder.typicode.com/todos/"
  constructor(private http: HttpClient ){

  }
  
  ngOnInit(){
   this.getConfig()

    .subscribe( data =>  {
      console.log(data)
    this.rowData = data
    })
  }
  getConfig() {
    return this.http.get(this.apiurl);
  }
}
// https://api.myjson.com/bins.15psn9