import {Component, OnInit} from '@angular/core';
import {CitiesService} from './cities.service';
import {IRegion} from './interfaces/region.interface';
import {ICity} from './interfaces/city.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    public regions: IRegion[];
    public selectedRegion: IRegion;
    public cities: ICity[];
    public selectedCity: ICity;
    public weatherData: any;

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        this.getRegions();
    }

    getRegions(): void {
        this.citiesService.getCitiesData().subscribe(regions => {
            this.regions = regions;
            this.onRegionChange(this.regions[0]);
        });
    }

    getWeather(latitude: number, longitude: number): void {
        this.citiesService.getWeatherData(latitude, longitude).subscribe((weather: any) => {
            this.weatherData = weather;
        });
    }

    onRegionChange(region: IRegion): void {
        this.selectedRegion = region;
        this.cities = this.selectedRegion.cities;
        this.onCityChange(this.cities[0]);
    }

    onCityChange(city: ICity): void {
        this.selectedCity = city;
        this.getWeather(this.selectedCity.lat, this.selectedCity.lng);
    }

}
