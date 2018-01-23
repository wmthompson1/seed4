import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

import { PublisherService } from '../services/publishers.service'
import { Publisher } from '../models/publisher';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'form-add',
  styleUrls: ['./form-add.css'],
  templateUrl: './form-add.html',
  providers: [PublisherService]
})

export class FormAdd implements OnInit {
  languages = ['English', 'Spanish', 'Other'];
  //model = new Employee('Darla', 'Smith');
  model: any = {};
  loading = false;
  hasPrimaryLanguageError = false;
  publishers: Publisher[] = [];
  errorMessage: string;

  constructor (
    private router: Router,
    private publisherService: PublisherService,

  ) {
   
  }



  ngOnInit(): void {
    
  }


  addNew() {
    this.loading = true;
    this.publisherService.create(this.model)
        .subscribe(
            data => {
               this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
}
  
//  onSubmit(form: NgForm) {
//     if (1 == 1) {
//      // this.employeeService.postEmployee(form.value)
//       this.publisherService.create(form.value)
//         .subscribe(data => {
//           // this.resetForm(form);
//           //this.employeeService.getEmployeeList();
//           //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
//         })
//     }

}
