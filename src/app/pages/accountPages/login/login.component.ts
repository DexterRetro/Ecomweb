import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MusikaUser } from 'src/app/models/musika-user';
import { UserDto } from 'src/app/models/user-dto';
import { MusikaUserService } from 'src/app/services/musika-user.service';
import { LoaderComponent } from 'src/app/templates/loader/loader.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm:FormGroup;
  loading=false;
  constructor(private fb:FormBuilder,private userServe:MusikaUserService,private dialog:MatDialog,
              private router:Router,private _snackBar: MatSnackBar) {
    this.logInForm = fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      firstNames:['null'],
      surname:['null'],
      password:['',Validators.required],
      telephone:[0],
      email:['null'],
      address:['null'],
      city:['null'],
      country:['null'],
    })
   }

  ngOnInit(): void {
  }
  async LogIn(){
    const dialogRef = this.dialog.open(LoaderComponent,{width:'250px',closeOnNavigation:true,disableClose:true});
    const res = await this.userServe.LogIn(this.logInForm.value);
    res.subscribe(r=>{
      this.NavigateToNextPage(r,dialogRef);
    },(err)=>{
      this._snackBar.open('Log In Failed! Username or Password Incorrect','Ok',{duration:2000,panelClass: ['blue-snackbar']});
      dialogRef.close();
    });
  }
  async NavigateToNextPage(user:MusikaUser,dialogRef:MatDialogRef<LoaderComponent>){
    //const rs = await this.userServe.TokenLogIn(token);
    this.userServe.CurrentUser = user;
    this.router.navigateByUrl('/account/profile');
    dialogRef.close();
  }

}
