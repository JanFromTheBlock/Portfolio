import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  translated: boolean | null = null;

  german = ['Über mich', 'Projekte', 'Über mich', 'Projekte', 'Kontakt', 'Hallo! Ich bin Jan', 'Entwickler', 'Lass uns zusammen arbeiten', 'Ich bin ein Frontend-Entwickler mit Sitz in Berlin, Deutschland. Es macht mir Spaß, Designern und Unternehmen dabei zu helfen, ihre Ideen in die Realität umzusetzen. Ich freue mich darauf, meine Entwicklerkarriere mit einer Stelle als Junior-Webentwickler fortzusetzen. <br> <br> Wenn Sie glauben, dass ich gut zu Ihren Projekten passen würde, kontaktieren Sie mich!', 'Nachricht senden', 'Projekte', 'Dieser Abschnit zeigt eine Auswahl meiner Arbeiten – testen Sie sie gerne aus', 'Alle', 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.', 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu', 'Kontakt', 'Haben Sie ein Problem zu lösen', 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihren Ideen zu hören, Sie kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen', 'Brauchen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!', 'Senden', 'Die E-Mail konnte nicht versender werden', 'Die E-Mail wurde erfolgreich versandt', 'Impressum'];
  ids = ['about-me-button', 'my-work-button', 'burger-about-me-button', 'burger-my-work-button', 'burger-contact-button', 'header-span1', 'header-span3', 'about-me-title', 'about-me-text', 'button-about-me', 'my-work-title', 'my-work-text', 'button-all', 'el-pollo-loco-text', 'join-text', 'contact-title', 'contact-span1', 'contact-span2', 'contact-span3', 'button-contact', 'error', 'succes', 'imprint-text1'];
  english = ['About me', 'My work', 'About me', 'My work', 'Contakt', 'Hello! I am Jan', 'Developer', "Let's work together", 'I am a Front-end developer based in Berlin, Germany. I enjoy helping designers and companies bring their ideas into real life. I am looking forward to continuing my developer career with a job in a junior web developer position. <br> <br> If you think I’d be a good match for your projects, contact me!', 'Send a message', 'My work', 'This page is a sample of my work - please feel free to try them out', 'All', 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.', 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories', 'Contakt', 'Got a problem to solve?', 'Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work', 'Need a Frontend Developer? Contact me!', 'Say hello', 'The email sending failed', 'The email was sent successfully', 'Imprint'];

  constructor() {
    if (localStorage.getItem('translation') == null) {
      let translation = false;
      localStorage.setItem("translation", JSON.stringify(translation));
    }
    let translated = localStorage.getItem('translation');
    if (translated) {
      this.translated = JSON.parse(translated);
    }
  }


  translateToGerman() {
    this.translatetheWordsIntoGerman();
    this.translateInputsIntoGerman();
    let translation = true;
    this.switchVariable(translation)
    this.switchVisibilityToGerman();

  }

  translateToEnglish() {
    this.translatetheWordsIntoEnglish();
    this.translateInputsIntoEnglish();
    let translation = false;
    this.switchVariable(translation);
    this.switchVisibilityToEnglish();
  }

  switchVariable(translation: boolean) {
    localStorage.setItem("translation", JSON.stringify(translation));

    let translated = localStorage.getItem('translation');
    if (translated) {
      this.translated = JSON.parse(translated);
    }
  }

  switchVisibilityToGerman() {
    document.getElementById('language-british')?.classList.remove('d-none');
    document.getElementById('language-german')?.classList.add('d-none');

    document.getElementById('language-british-burger')?.classList.remove('d-none');
    document.getElementById('language-german-burger')?.classList.add('d-none');

    document.getElementById('privacy-policy-english')?.classList.add('d-none');
    document.getElementById('privacy-policy-german')?.classList.remove('d-none');

    document.getElementById('impressum-english')?.classList.add('d-none');
    document.getElementById('impressum-german')?.classList.remove('d-none');
  }

  switchVisibilityToEnglish() {
    document.getElementById('language-british')?.classList.add('d-none');
    document.getElementById('language-german')?.classList.remove('d-none');

    document.getElementById('language-british-burger')?.classList.add('d-none');
    document.getElementById('language-german-burger')?.classList.remove('d-none');

    document.getElementById('privacy-policy-english')?.classList.remove('d-none');
    document.getElementById('privacy-policy-german')?.classList.add('d-none');

    document.getElementById('impressum-english')?.classList.remove('d-none');
    document.getElementById('impressum-german')?.classList.add('d-none');
  }

  translatetheWordsIntoGerman() {
    for (let index = 0; index < this.ids.length; index++) {
      const id = this.ids[index];
      const translation = this.german[index];
      const element = document.getElementById(id);
      if (element)
        element.innerHTML = translation;
    }
  }

  translateInputsIntoGerman() {
    let input1 = document.getElementsByName('name')[0] as HTMLInputElement;
    let input2 = document.getElementsByName('mail')[0] as HTMLInputElement;
    let input3 = document.getElementsByName('message')[0] as HTMLInputElement;

    if (input1 != undefined) {
      input1.placeholder = 'Ihr Name';
      input2.placeholder = 'Ihre E-Mail';
      input3.placeholder = 'Ihr Nachricht';
    }
  }

  translateInputsIntoEnglish() {
    let input1 = document.getElementsByName('name')[0] as HTMLInputElement;
    let input2 = document.getElementsByName('mail')[0] as HTMLInputElement;
    let input3 = document.getElementsByName('message')[0] as HTMLInputElement;

    if (input1 != undefined) {
      input1.placeholder = 'Your name';
      input2.placeholder = 'Your email';
      input3.placeholder = 'Your message';
    }
  }

  translatetheWordsIntoEnglish() {
    for (let index = 0; index < this.ids.length; index++) {
      const id = this.ids[index];
      const translation = this.english[index];
      const element = document.getElementById(id);
      if (element)
        element.innerHTML = translation;
    }
  }

  checkTranslation() {
    if (this.translated) {
      this.translateToGerman();
    } else {
      this.translateToEnglish();
    }
  }
}
