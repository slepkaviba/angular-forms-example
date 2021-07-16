import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TemplateFormsExampleType} from './template-forms-example.type';

@Component({
  selector: 'app-template-forms-example',
  templateUrl: './template-forms-example.component.html',
  styleUrls: ['./template-forms-example.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

    this.example.birthdate = dateChange.value;

    this.ageCalculation = now.getFullYear() - birthdate.getFullYear();
  }

  submit(): void {
    // Custom business requirement - age must be  multiplication of 2
    if (this.example.age % 2 === 0) {
      alert(JSON.stringify(this.example));
    } else {
      alert('That age is not accepted by our system.');
    }
  }
}
