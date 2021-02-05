import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRegion} from '../interfaces/region.interface';
import {ICity} from '../interfaces/city.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() regions: IRegion[];
    @Input() selectedRegion: IRegion;
    @Input() cities: ICity[];
    @Input() selectedCity: ICity;
    @Output() onCitySelect: EventEmitter<ICity> = new EventEmitter<ICity>();

    constructor() {}
    ngOnInit(): void {}

    selectCity(city: ICity): void {
        this.onCitySelect.emit(city);
    }

}
