import {Component} from '@angular/core';
import {TemplateFormsExampleType} from './template-forms-example.type';

@Component({
  selector: 'app-template-forms-example',
  templateUrl: './template-forms-example.component.html',
  styleUrls: ['./template-forms-example.component.sass']
})
export class TemplateFormsExampleComponent {

  ageCalculation: number = 0;

  example: TemplateFormsExampleType = {
    name: '',
    age: 0,
    birthdate: '',
  };

  beginning: Date = new Date(1988, 2, 2, 19, 50);

  updateAge(dateChange: any): void {
    const birthdate = new Date(dateChange.value);
    const now = new Date();

    this.ageCalculation = now.getFullYear() - birthdate.getFullYear();
  }

  submit(): void {
    alert(this.example);
  }
}
