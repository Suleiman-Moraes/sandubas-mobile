import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DetalheRoutingModule } from './detalhe-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [DetalhesComponent],
  imports: [
    DetalheRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DetalheModule { }
