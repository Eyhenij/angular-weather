import {Component, OnInit} from '@angular/core';
import {CitiesService} from './cities.service';
import {IRegion} from './interfaces/region.interface';
import {ICity} from './interfaces/city.interface';
import {IWeather} from './interfaces/weather.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public regions: IRegion[];
    public selectedRegion: IRegion;
    public cities: ICity[];
    public selectedCity: ICity;
    public weatherDataArray: IWeather[] = [];

    constructor(private readonly _citiesService: CitiesService) {
    }

    ngOnInit(): void {
        this.getRegions();
    }

    getRegions(): void {
        this._citiesService.getCitiesData().subscribe(regions => {
            this.regions = regions;
            this.onRegionChange(this.regions[0]);
        });
    }

    getWeather(city: ICity): void {
        this._citiesService.getWeatherData(city).subscribe((weather: any) => {
            this.addNewWeatherData(weather);
        });
    }

    onRegionChange(region: IRegion): void {
        this.selectedRegion = region;
        this.cities = this.selectedRegion.cities;
        this.onCityChange(this.cities[0]);
    }

    onCityChange(city: ICity): void {
        this.selectedCity = city;
        this.getWeather(city);
    }

    addNewWeatherData(weather: IWeather): void {
        this.weatherDataArray.unshift(weather);
        if (this.weatherDataArray.length >= 3) {
            this.weatherDataArray.splice(3, 1);
        }
    }

}
