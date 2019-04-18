import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes = [
  { path: "", component: TelaPrincipalComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TelaprincipalRoutingModule { }
