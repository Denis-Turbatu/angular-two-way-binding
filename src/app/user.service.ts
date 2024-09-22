// user.service.ts
import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number | null;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    name: '',
    email: '',
    age: null,
    bio: '',
  };
}