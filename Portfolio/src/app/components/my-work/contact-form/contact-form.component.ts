import { Component } from '@angular/core';
import { FormularComponent } from './formular/formular.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormularComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

}
