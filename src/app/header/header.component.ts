import {Component, OnInit} from '@angular/core';
import {CitiesService} from '../cities.service';
import {IRegion} from '../interfaces/region.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public regions: IRegion[];
    public selectedRegion: IRegion;

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        this.getRegions();
    }

    getRegions(): void {
        this.citiesService.getCitiesData().subscribe(regions => {
            this.regions = regions[0].regions;
            this.selectedRegion = this.regions[0];
        });
    }

    selectRegion(region: IRegion): void {
        this.selectedRegion = region;
    }

}
