import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isLoginMode=true;
  error:string="";
  success:string="";

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
    ) { 
    
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      re_password: '',
      is_vendor: ''
    });
  }

  submit(): void {
    this.apiService.register(environment.apiUrl)
  }

}


