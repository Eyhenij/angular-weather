import {Component, Input, OnInit} from '@angular/core';
import {CitiesService} from '../cities.service';
import {IRegion} from '../interfaces/region.interface';
import {ICity} from '../interfaces/city.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public cities: any;

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        this.getCities();
    }

    getCities(): void {
        this.citiesService.getCitiesData().subscribe(cities => {
            const result = cities[0].regions[1].cities;
            // console.log(result);
            this.cities = result;
        });
    }

}
