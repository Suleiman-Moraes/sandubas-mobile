import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SacolaRoutingModule } from './sacola-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SacolaComponent } from './sacola/sacola.component';

@NgModule({
  declarations: [SacolaComponent],
  imports: [
    SacolaRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SacolaModule { }
