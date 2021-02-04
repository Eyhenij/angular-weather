import {IRegion} from './region.interface';

export interface IResponse {
    name: string;
    regions: Array<IRegion>;
}
