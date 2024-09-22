import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    // You can access the user data here
    console.log(this.userService.user);
  }
}
