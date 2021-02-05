import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRegion} from '../interfaces/region.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() regions: IRegion[];
    @Input() selectedRegion: IRegion;
    @Output() onRegionSelect: EventEmitter<IRegion> = new EventEmitter<IRegion>();

    constructor() {}

    ngOnInit(): void {}

    selectRegion(region: IRegion): void {
        this.onRegionSelect.emit(region);
    }

}
