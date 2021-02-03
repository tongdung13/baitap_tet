import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: any;
  constructor(private service: UserService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.user = new User();
  }

  addUser()
  {
    this.service.postRegister(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['users']);
        this.user = new User();
      }, error => console.log(error)
    );
  }

  userForm = new FormGroup({
    name: new FormControl('mời bạn nhập tên', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl('mời bạn nhập email', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('mời bạn nhập mật khẩu', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
      
    ])
  })

  get f(){
    return this.userForm.controls;
  }

  submit() {
    console.log(this.userForm.value);
  }
}
