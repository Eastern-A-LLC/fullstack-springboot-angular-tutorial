import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: ActivatedRoute){}
    
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: data => {this.employee = data},
      error: error => {console.log(error)}
    })
    
  }
  
  onSubmit() {};
}
