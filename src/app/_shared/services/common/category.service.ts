import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/common/category';
import { HttpClientService } from './http-client.service';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    path: string = "category";

    constructor(private httpClient: HttpClientService) { }

    getNestedCategories() {
        return this.httpClient.get<Category[]>(`${this.path}/get-nested`);
    }

    getById(id: number) {
        return this.httpClient.get<Category>(`${this.path}/${id}`)
    }

}