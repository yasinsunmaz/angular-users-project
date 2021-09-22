import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[]=[];
  userDetailModel: any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      // console.log('userList', data);
      this.user = data;
    })
  }
  userDetail(id) {
    if(id>0){
      this.userService.getUserDetails(id).subscribe(data => {
        this.userDetailModel = data;
      });
    }
  }
}
