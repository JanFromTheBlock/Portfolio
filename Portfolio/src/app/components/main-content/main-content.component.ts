import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingAnimationComponent } from '../loading-animation/loading-animation.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, SkillSetComponent, MyWorkComponent, FooterComponent, LoadingAnimationComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {
  constructor(){}

  ngAfterViewInit(){
    setTimeout(() => {
      document.getElementById('background-loader')?.classList.add('hidden');
    }, 1500);

  }

  closeMenu(){
    document.getElementById('burger-menu')?.classList.add('app-burger-menu-closed')
  }
}
