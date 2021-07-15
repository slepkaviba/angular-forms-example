import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsExampleComponent} from './reactive-forms-example.component';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveFormsExampleComponent,
  ],
  exports: [
    ReactiveFormsExampleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ReactiveFormsExampleModule {
}
