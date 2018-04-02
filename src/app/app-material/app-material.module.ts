import { NgModule } from '@angular/core';

import {
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule

  ]
})
export class AppMaterialModule { }

