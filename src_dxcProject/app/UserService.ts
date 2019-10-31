import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user: User)
  {
    return this.http.post<any>('http://localhost:7768/user', user);
  }

  getUser(userId: string)
  {
    return this.http.get<User>(`http://localhost:7768/user/${userId}`);
  }

  getAllUsers()
  {
    return this.http.get<User[]>('http://localhost:7768/user');
  }

  updateUser(userId:string)
  {
    return this.http.put<User>('http://localhost:7768/user',userId);
  }

  forgotPassword(userId:string, key:string)
  {
    return this.http.get<any>(`http://localhost:7768/user/${userId}/${key}`);
  }

  reset(userId:string, newpass:string)
  {
    return this.http.put<any>(`http://localhost:7768/user/${userId}/${newpass}`,null);
  }

}

