import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module'
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-form-data',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.scss'
})
export class FormDataComponent implements OnInit {
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.user = {
      name: '',
      email: '',
      age: null,
      bio: '',
    };
  }
}