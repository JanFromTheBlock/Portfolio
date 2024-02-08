import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {

  german = ['Über mich', 'Projekte', 'Über mich', 'Projekte', 'Kontakt', 'Hallo! Ich bin Jan', 'Entwickler', 'Lass uns zusammen arbeiten', 'Ich bin ein Frontend-Entwickler mit Sitz in Berlin, Deutschland. Es macht mir Spaß, Designern und Unternehmen dabei zu helfen, ihre Ideen in die Realität umzusetzen. Ich freue mich darauf, meine Entwicklerkarriere mit einer Stelle als Junior-Webentwickler fortzusetzen. <br> <br> Wenn Sie glauben, dass ich gut zu Ihren Projekten passen würde, kontaktieren Sie mich!', 'Nachricht senden', 'Projekte', 'Dieser Abschnit zeigt eine Auswahl meiner Arbeiten – testen Sie sie gerne aus', 'Alle', 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.', 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu', 'Kontakt', 'Haben Sie ein Problem zu lösen', 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihren Ideen zu hören, Sie kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen', 'Brauchen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!', `Ich habe die <a routerLink="/privacy-policy"><span class="privacy-policy">Datenschutzrichtlinie</span></a> und stimme der beschriebenen Verarbeitung meiner Daten zu`, 'Senden', 'Die E-Mail konnte nicht versender werden', 'Die E-Mail wurde erfolgreich versandt', 'Impressum'];
  ids = ['about-me-button', 'my-work-button', 'burger-about-me-button', 'burger-my-work-button', 'burger-contact-button', 'header-span1', 'header-span3', 'about-me-title', 'about-me-text', 'button-about-me', 'my-work-title', 'my-work-text', 'button-all', 'el-pollo-loco-text', 'join-text', 'contact-title', 'contact-span1', 'contact-span2', 'contact-span3', 'formular-text', 'button-contact', 'error', 'succes', 'imprint-text'];

  translateToGerman() {
    for (let index = 0; index < this.ids.length; index++) {
      const id = this.ids[index];
      const translation = this.german[index];
      const element = document.getElementById(id);

      if (element)
        element.innerHTML = translation;
    }

    let input1 = document.getElementsByName('name')[0] as HTMLInputElement;
    let input2 = document.getElementsByName('mail')[0] as HTMLInputElement;
    let input3 = document.getElementsByName('message')[0] as HTMLInputElement;

    input1.placeholder = 'Ihr Name';
    input2.placeholder = 'Ihre E-Mail';
    input3.placeholder = 'Ihr Nachricht';

    document.getElementById('language-british')?.classList.remove('d-none');
    document.getElementById('language-german')?.classList.add('d-none');
    document.getElementById('language-british-burger')?.classList.remove('d-none');
    document.getElementById('language-german-burger')?.classList.add('d-none');
  }

  translateToEnglish(){
    location.reload();
  }


  closeMenu(){
    document.getElementById('burger-menu')?.classList.add('app-burger-menu-closed')
  }

  doNotCloseMenu(event: any){
    event.stopPropagation();
  }
}
