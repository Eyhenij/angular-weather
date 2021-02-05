import {Component} from '@angular/core';
import {IRegion} from './interfaces/region.interface';
import {CitiesService} from './cities.service';
import {ICity} from './interfaces/city.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public regions: IRegion[];
    public selectedRegion: IRegion;
    public cities: ICity[];
    public selectedCity: ICity;

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        this.getRegions();
    }

    getRegions(): void {
        this.citiesService.getCitiesData().subscribe(regions => {
            this.regions = regions;
            this.selectedRegion = this.regions[0];
            this.cities = this.regions.filter(region => region.name === this.selectedRegion.name)[0].cities;
            this.selectedCity = this.cities[0];
        });
    }

}
