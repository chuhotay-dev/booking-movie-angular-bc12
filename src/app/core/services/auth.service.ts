import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(account: User): Observable<any> {
    return this.apiService.post('QuanLyNguoiDung/DangNhap', account);
  }
}
