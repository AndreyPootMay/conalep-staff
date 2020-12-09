import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

// RUTAS
import { APP_ROUTING } from "./app.routes";

// SERVICIOS
import { OfficesService } from "./services/offices.service";

// COMPONENTES
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { OfficesComponent } from "./components/offices/offices.component";
import { OfficeComponent } from "./components/office/office.component";
import { SearchComponent } from "./components/search/search.component";
import { OfficeCardComponent } from "./components/office-card/office-card.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    OfficesComponent,
    OfficeComponent,
    SearchComponent,
    OfficeCardComponent
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [OfficesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
