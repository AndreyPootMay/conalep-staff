import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { OfficesComponent } from "./components/offices/offices.component";
import { OfficeComponent } from "./components/office/office.component";
import { SearchComponent } from "./components/search/search.component";
import { RegistrationproccessComponent } from './components/registrationproccess/registrationproccess.component';

const APP_ROUTES: Routes = [
  // { path: "home", component: OfficesComponent },
  { path: "signup", component: RegistrationproccessComponent },
  { path: "about", component: AboutComponent },
  { path: "offices", component: OfficesComponent },
  { path: "office/:id", component: OfficeComponent },
  { path: "search/:term", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "offices" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
