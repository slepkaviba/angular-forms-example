import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TemplateFormsExampleComponent } from './template-forms-example.component';

@NgModule({
  declarations: [TemplateFormsExampleComponent],
  exports: [TemplateFormsExampleComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class TemplateFormsExampleModule {}
