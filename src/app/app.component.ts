import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormDataComponent } from './form-data/form-data.component';
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormDataComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-two-way-binding';
}
