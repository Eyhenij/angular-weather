import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IResponse} from './interfaces/response.interface';
import {IRegion} from './interfaces/region.interface';

@Injectable()
export class CitiesService {

    private citiesUrl = 'https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json';
    private weatherUrl = 'https://dark-sky.p.rapidapi.com';
    private httpOptions = {
        headers: new HttpHeaders({
            "x-rapidapi-key": "ece9e209b0msh9c8b250a3889709p1b3e0cjsn779ba1f2293b",
            "x-rapidapi-host": "dark-sky.p.rapidapi.com"
        })
    };

    constructor(private http: HttpClient) {}

    getCitiesData(): Observable<IRegion[]> {
        return this.http.get<IResponse>(this.citiesUrl).pipe(
            map((data) => {
                return data[0].regions;
            })
        );
    }

    getWeatherData(latitude: number, longitude: number): Observable<any>{
        return this.http.get<any>(
            `${this.weatherUrl}/${latitude},${longitude}?lang=en&units=auto`,
            this.httpOptions
        );
    }

}
