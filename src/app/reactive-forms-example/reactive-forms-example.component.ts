import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.sass']
})
export class ReactiveFormsExampleComponent {

  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  age: FormControl = new FormControl(null, [Validators.required, Validators.min(18)]);

  birthdate: FormControl = new FormControl();

  exampleForm: FormGroup = new FormGroup({
    name: this.name,
    age: this.age,
    birthDate: this.birthdate,
  });

  beginning: Date = new Date(1988, 2, 2, 19, 50);

  ageCalculation: Observable<number>;

  constructor() {
    this.ageCalculation = this.birthdate.valueChanges.pipe(
      filter((date) => date !== null),
      map((date) => {
        const birthdate = new Date(date);
        const now = new Date();

        return now.getFullYear() - birthdate.getFullYear();
      }),
    );
  }

  submit(): void {
    alert(JSON.stringify(this.exampleForm.value));
  }
}
