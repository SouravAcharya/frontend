import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public name!: string;
  public newForm!: FormGroup;
  public showSpinner: boolean = false;
  public message!: string;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newForm = this.fb.group({
      salary: ['']
    });
  }

  callPostAPI() {
    this.showSpinner = true;
    const req = {
      name: this.name,
      salary: this.newForm.value.salary,
      age: '25' // As we are using dummy post API, this field is required.Hence, passing a dummy value
    }
    this.apiService.saveData(req).subscribe({
      next: (res: any) => {
        this.showSpinner = false;
        this.message = res.message + ' The id = ' + res.data.id;
      },
      error: (e) => {
        this.showSpinner = false;
        this.message = 'Error occured from API';
      }
    })
  }
}
