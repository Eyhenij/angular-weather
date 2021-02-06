import {Component, Input, OnInit} from '@angular/core';
import {ICity} from '../interfaces/city.interface';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    @Input() selectedCity: ICity;
    @Input() weatherData: any;

    constructor() {}

    ngOnInit(): void {}

}
