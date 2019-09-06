import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

@Injectable()

export class RestaurantService {

    constructor(private http: Http) { }

    public getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }

    public getRestaurantById(id: String): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }

    public getReviewsByRestaurantId(id: String): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }
}