import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../../interfaces/weather.interface';

@Component({
    selector: 'app-content-card',
    templateUrl: './content-card.component.html',
    styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

    @Input()
    public readonly weatherData: IWeather;

    constructor() {}

    ngOnInit(): void {}

}
