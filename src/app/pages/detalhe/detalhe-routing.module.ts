import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: ":id", component: DetalhesComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class DetalheRoutingModule { }
