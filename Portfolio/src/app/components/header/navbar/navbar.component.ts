import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  germanTranslation = inject(TranslationService)

  ngOnInit(){
    this.germanTranslation.checkTranslation();
   }


  translateToGerman() {
   this.germanTranslation.translateToGerman();

  }

  translateToEnglish() {
    this.germanTranslation.translateToEnglish();

  }
}
