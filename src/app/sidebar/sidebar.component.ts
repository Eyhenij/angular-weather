import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IRegion} from '../interfaces/region.interface';
import {ICity} from '../interfaces/city.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    @Input()
    public readonly regions: IRegion[];
    @Input()
    public readonly selectedRegion: IRegion;
    @Input()
    public readonly cities: ICity[];
    @Input()
    public readonly selectedCity: ICity;

    @Output()
    onCitySelect: EventEmitter<ICity> = new EventEmitter<ICity>();

    constructor() {}

    selectCity(city: ICity): void {
        this.onCitySelect.emit(city);
    }

}
