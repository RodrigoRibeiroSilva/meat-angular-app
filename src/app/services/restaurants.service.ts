import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


import { FOOD_API } from '../app.api';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';



@Injectable()
export class RestaurantService {

    constructor(private http: HttpClient){}

    getRestaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined

        if(search){
            params = new HttpParams().append('q', search)
        } 

        return this.http.get<Restaurant[]>(`${FOOD_API}/restaurants`, {params: params})
    }

    getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${FOOD_API}/restaurants/${id}`)
    }

    getRestaurantReviews(id: string): Observable<any> {
        return this.http.get(`${FOOD_API}/restaurants/${id}/reviews`)

    }
    
}