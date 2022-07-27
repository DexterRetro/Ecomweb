import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MusikaUser } from 'src/app/models/musika-user';
import { MusikaUserService } from 'src/app/services/musika-user.service';
import { LoaderComponent } from 'src/app/templates/loader/loader.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading=false;
  constructor(fb:FormBuilder,private userServ:MusikaUserService,private dialog: MatDialog,private router:Router) {
    this.signupForm = fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      firstNames:['',Validators.required],
      surname:['',Validators.required],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      telephone:['',Validators.compose([Validators.required,Validators.minLength(9)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      address:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
    })
  }
  signupForm:FormGroup;
  ngOnInit(): void {
  }
  async SignUp(){
    const dialogRef = this.dialog.open(LoaderComponent, {
      width: '250px',disableClose:true,closeOnNavigation:true
    });
    const res = await this.userServ.SignUp(this.signupForm.value);
    res.subscribe(r=>{
      this.NavigateToNextPage(r,dialogRef);
    });

  }
  async NavigateToNextPage(user:MusikaUser,dialogRef:MatDialogRef<LoaderComponent>){
    //const rs = await this.userServ.TokenLogIn(token);
    this.userServ.CurrentUser = user;
      this.router.navigateByUrl('/account/profile');
      dialogRef.close();
  }
}
