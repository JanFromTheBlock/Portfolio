import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openMenu(){
    document.getElementById('burger-menu')?.classList.remove('app-burger-menu-closed')
  }
  
  doNotCloseMenu(event: any){
    event.stopPropagation();
  }
}
