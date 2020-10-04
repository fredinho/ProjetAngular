import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from '../models/Employee';
import { Tache } from '../models/Tache';
import { ApiService } from '../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { Validation } from '../models/Validation';
import { Vehicule } from '../models/Vehicule';
import { Personne } from '../models/Personne';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  panelOpenState = false;
  data: Employee[] = [];
  valD: Validation[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.api.getValidation()
    .subscribe((res: any) => {
      this.valD = res;
      this.valD[1].vehicule.person.adress1 = "1 residence du parc";
      this.valD[1].vehicule.person.cp = "75000 Paris";
      this.valD[1].vehicule.person.fullName = "BABADISAKOU";
      this.valD[1].vehicule.person.lieuNaiss = "Toulouse";
      this.valD[1].vehicule.person.dateNaiss = "24/10/1985";
      console.log(this.valD);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }


  setValidation(val : Validation, state : string){
    this.isLoadingResults = true;
    val.state = state;
    val.isValidated = "1";
    //val.validationDate = new Date();
    console.log(val);
    this.api.updateValidation(val)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.ngOnInit();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  deleteTask(message: string, action: string, id: number) {
    this.isLoadingResults = true;
    this.api.deleteTache(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          //this.router.navigate(['/cases']);
          this.ngOnInit();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    this._snackBar.open(message, action, {
      duration: 2000, 
    });
  }
}
