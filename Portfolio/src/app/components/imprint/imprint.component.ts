import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../header/navbar/navbar.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
