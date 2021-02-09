import {Component, Input} from '@angular/core';
import {IWeather} from '../../interfaces/weather.interface';

@Component({
    selector: 'app-content-card',
    templateUrl: './content-card.component.html',
    styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

    @Input()
    public readonly weatherData: IWeather;

    constructor() {}

}
