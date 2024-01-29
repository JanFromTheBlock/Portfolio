import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../header/navbar/navbar.component';
import { BurgerMenuComponent } from '../header/burger-menu/burger-menu.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, BurgerMenuComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  openMenu(){
    document.getElementById('burger-menu')?.classList.remove('app-burger-menu-closed')
  }
  
  doNotCloseMenu(event: any){
    event.stopPropagation();
  }
}
