import { Routes } from '@angular/router';

import { MIComponent } from "./mi";
import { ErrorComponent } from "./error";

export const routes: Routes = [
  // { path: ':id/mi', loadChildren: './mi/mi.module#MIModule'},
  // { path: 'error', loadChildren: './error/error.module#ErrorModule' },
  // { path: '**', loadChildren: './error/error.module#ErrorModule' }
  { path: ':id/mi', component: MIComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }

];

export const routableComponents = [
  MIComponent,
  ErrorComponent
];