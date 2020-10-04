import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-new-empl',
  templateUrl: './new-empl.component.html',
  styleUrls: ['./new-empl.component.css']
})
export class NewEmplComponent implements OnInit {
  emplForm: FormGroup;
  name = '';
  salary: number = null;
  department = ['IT', 'Finance', 'HR'];
  empl: Employee = { id: null, name: '', department: '', salary: null,  tache: null };
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.emplForm = this.formBuilder.group({
      name : [null, Validators.required],
      salary : [null, Validators.required],
      department : [null, Validators.required],
      id : 1,
      tache : null
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addEmployee(this.emplForm.value)
      .subscribe((res: any) => {
          this.isLoadingResults = false;
          this.router.navigate(['/']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
