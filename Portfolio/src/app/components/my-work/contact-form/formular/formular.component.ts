import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})
export class FormularComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor(){ }

  async sendMail(){
    console.log('Sending Mail', this.myForm);
    let nameField = this.nameField.nativeElement
    let messageField = this.messageField.nativeElement
    let sendButton = this.sendButton.nativeElement
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch('http://janborcholt.de/send_mail/send_mail.php',{
      method: 'POST',
      body: fd,
    })

    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    
  }
}
