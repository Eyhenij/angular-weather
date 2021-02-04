import {Component, OnInit} from '@angular/core';
import {CitiesService} from '../cities.service';
import {ICity} from '../interfaces/city.interface';
import {IRegion} from '../interfaces/region.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public regions: IRegion[];

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        this.getRegions();
    }

    getRegions(): void {
        this.citiesService.getCitiesData().subscribe(regions => {
            const result = regions[0].regions;
            console.log(result);
            this.regions = result;
        });
    }

}
