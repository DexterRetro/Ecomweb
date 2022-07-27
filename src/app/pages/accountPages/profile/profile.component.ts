import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusikaUser } from 'src/app/models/musika-user';
import { OderHistory } from 'src/app/models/oder-history';
import { MusikaUserService } from 'src/app/services/musika-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['position', 'itemName', 'itemPrice', 'date'];
  dataSource:OderHistory[] = [];
  user:MusikaUser;
  constructor(private userServ:MusikaUserService,private router:Router) {
    if(userServ.CurrentUser){
     this.user = this.userServ.CurrentUser;
    }else{
      router.navigateByUrl('/account/logIn');
      return;
    }
  }

  ngOnInit(): void {
  }

}
