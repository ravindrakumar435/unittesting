import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentData = {name: 'max', result: 'pass'};
  isLoggedIn = true;
  user = { name: 'Test User'};
  constructor() { }
}
