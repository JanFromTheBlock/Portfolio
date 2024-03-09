import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../header/navbar/navbar.component';
import { BurgerMenuComponent } from '../header/burger-menu/burger-menu.component';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, BurgerMenuComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  germanTranslation = inject(TranslationService)

  constructor(){
    window.scrollTo(0, 0)
  }

  ngOnInit(){
    this.germanTranslation.checkTranslation();
   }

  openMenu(){
    document.getElementById('burger-menu')?.classList.remove('app-burger-menu-closed')
  }
  
  doNotCloseMenu(event: any){
    event.stopPropagation();
  }
}
