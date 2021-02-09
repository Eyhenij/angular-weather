import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IRegion} from '../interfaces/region.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input()
    public readonly regions: IRegion[];
    @Input()
    public readonly selectedRegion: IRegion;

    @Output()
    onRegionSelect: EventEmitter<IRegion> = new EventEmitter<IRegion>();

    constructor() {}

    public selectRegion(region: IRegion): void {
        this.onRegionSelect.emit(region);
    }

}
