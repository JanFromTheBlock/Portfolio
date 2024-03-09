import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {

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


  closeMenu(){
    document.getElementById('burger-menu')?.classList.add('app-burger-menu-closed')
  }

  doNotCloseMenu(event: any){
    event.stopPropagation();
  }
}
