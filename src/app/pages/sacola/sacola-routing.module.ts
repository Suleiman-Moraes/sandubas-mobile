import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SacolaComponent } from './sacola/sacola.component';

const routes: Routes = [
  { path: "", component: SacolaComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SacolaRoutingModule { }
