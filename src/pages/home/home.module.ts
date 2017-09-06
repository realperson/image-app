import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from "./home";
import {NavigationModule} from "../../components/navigation/navigation.module";
import {CoreModule} from "../../modules/core/core.module";
// import {RepeatDirective} from "../../directives/repeat/repeat";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    NavigationModule,
    CoreModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
