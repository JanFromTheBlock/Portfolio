import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImprintComponent } from '../imprint/imprint.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ImprintComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
