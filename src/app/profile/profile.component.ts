import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User = {
    name: '',
    email: '',
    age: null,
    bio: '',
  }
}
interface User {
  name: string;
  email: string;
  age: number | null;
  bio: string;
}