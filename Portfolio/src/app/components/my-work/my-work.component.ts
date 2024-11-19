import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  categories = ['all', 'javascript', 'angular', 'firebase', 'django'];
  all = ['el-pollo-loco', 'join', 'pokedex', 'da-bubble', 'videoflix'];
  javascript = ['el-pollo-loco', 'join', 'pokedex', 'da-bubble', 'videoflix'];
  angular = ['da-bubble', 'videoflix'];
  firebase = ['da-bubble'];
  django = ['videoflix']


  filterWork(array: any, title: any){
    for (let index = 0; index < this.all.length; index++) {
      const element = this.all[index];
      document.getElementById(element)?.classList.add('d-none');
    }
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      document.getElementById(element)?.classList.remove('d-none');
    };

    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];
      document.getElementById('button-' + element)?.classList.remove('active');
    }

    document.getElementById('button-'+ title)?.classList.add('active');

  }
}
