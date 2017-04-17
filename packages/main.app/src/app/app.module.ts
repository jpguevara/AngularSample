import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ModuleAModule, ModuleARoutes} from '@myapp/library/src';


// all the routes from the library moduleA should be child
// /library/childroute
 const routes: Routes = [


  // { path: 'library', loadChildren: '@myapp/library/src/index#ModuleAModule' }
  { path: '', redirectTo: '/library', pathMatch:'full' },
  { path: 'library', children: ModuleARoutes }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    ModuleAModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
