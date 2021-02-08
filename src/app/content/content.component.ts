import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../interfaces/weather.interface';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    @Input()
    public readonly weatherDataArray: IWeather[];

    constructor() {}

    ngOnInit(): void {}

}
