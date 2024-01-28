import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, SkillSetComponent, MyWorkComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  closeMenu(){
    document.getElementById('burger-menu')?.classList.add('app-burger-menu-closed')
  }
}
