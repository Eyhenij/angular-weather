import {ICity} from './city.interface';

export interface IRegion {
    name: string;
    cities: Array<ICity>;
}
