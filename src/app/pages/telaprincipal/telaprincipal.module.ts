import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { TelaprincipalRoutingModule } from './telaprincipal-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

@NgModule({
  declarations: [TelaPrincipalComponent],
  imports: [
    TelaprincipalRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TelaprincipalModule { }
