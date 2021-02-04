import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IResponse} from './interfaces/response.interface';
import {IRegion} from './interfaces/region.interface';
import {ICity} from './interfaces/city.interface';

@Injectable()
export class CitiesService {
    private citiesUrl = 'https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json';
    public data: any;

    constructor(private http: HttpClient) {}

    getCitiesData(): Observable<IResponse> {
        return this.http.get<IResponse>(this.citiesUrl);
    }
}
