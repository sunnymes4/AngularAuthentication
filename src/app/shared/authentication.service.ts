import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    constructor(private http: HttpClient) { 
    }

    login(username: string, password: string) {
        debugger;
        var userData = "username=" + username + "&password=" + password +"&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });
        return this.http.post<any>(environment.API_URL+"/Token",userData,{ headers: reqHeader })
            .pipe(map((user:any )=> {

                // login successful if there's a jwt token in the response
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', user.access_token);
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}