import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [MaterialModule],
  exports: [
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
  ],
})
export class SharedModule {}
