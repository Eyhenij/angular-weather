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

    public cities: ICity[];

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        // this.getCities();
    }

    // getCities(): void {
    //     this.citiesService.getCities().subscribe(cities => {
    //         console.log(cities);
    //         // this.cities = cities;
    //     });
    // }

}
