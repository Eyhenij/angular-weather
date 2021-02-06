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
        // this.getWeather(this.selectedCity.lat, this.selectedCity.lng);
        this.getWeather(55.6411645, 27.0450814);
    }

    getRegions(): void {
        this.citiesService.getCitiesData().subscribe(regions => {
            this.regions = regions;
            this.selectedRegion = this.regions[0];
            this.cities = this.regions.filter(i => i.name === this.selectedRegion.name)[0].cities;
            this.selectedCity = this.cities[0];
        });
    }

    getWeather(latitude: number, longitude: number): void {
        this.citiesService.getWeatherData(latitude, longitude).subscribe((weather) => {
            this.weatherData = weather;
            console.log(this.weatherData);
        });
    }

    onRegionChange(region: IRegion): void {
        this.selectedRegion = region;
        this.cities = this.regions.filter(i => i.name === region.name)[0].cities;
        this.selectedCity = this.cities[0];
    }

}
