import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    private url = environment.apiUrl;

    constructor(private http: HttpClient) {

    }

    get<T>(path: string): Promise<T> {
        return this.http.get<T>(this.url + path).toPromise();
    }

    post(path: string, model: any): Promise<boolean> {
        return this.http.post<boolean>(this.url + path, model).toPromise();
    }

    put(path: string, model: any): Observable<any> {
        return this.http.put(this.url + path, model);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(this.url + path);
    }

}