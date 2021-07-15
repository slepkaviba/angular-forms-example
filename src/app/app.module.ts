import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {ReactiveFormsExampleModule} from './reactive-forms-example/reactive-forms-example.module';
import {TemplateFormsExampleModule} from './template-forms-example/template-forms-example.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsExampleModule,
    TemplateFormsExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
