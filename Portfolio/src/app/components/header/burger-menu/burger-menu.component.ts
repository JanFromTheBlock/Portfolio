import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  closeMenu(){
    document.getElementById('burger-menu')?.classList.add('app-burger-menu-closed')
  }

  doNotCloseMenu(event: any){
    event.stopPropagation();
  }
}
