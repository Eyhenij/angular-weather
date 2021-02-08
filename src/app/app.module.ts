import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {HttpClientModule} from '@angular/common/http';
import {CitiesService} from './cities.service';
import { ContentCardComponent } from './content/content-card/content-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        ContentComponent,
        ContentCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [CitiesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
