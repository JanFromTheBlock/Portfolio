import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})
export class FormularComponent {
  @ViewChild('myForm') myForm?: NgForm
  isSending = false;
  emailSent = false;
  isError = false;

  constructor() { }

  async sendMail() {
    console.log('Sending Mail', this.myForm);
    let fd = new FormData();
    console.log(this.myForm?.value.name);

    fd.append('name', this.myForm?.value.name);
    fd.append('email', this.myForm?.value.email);
    fd.append('message', this.myForm?.value.message);

    this.isSending = true;
    try{
      await fetch('https://janborcholt.de/send_mail/send_mail.php', {
        method: 'POST',
        body: fd,
      });
      this.emailSent = true;
    }catch (error) {
      this.isError = true;
    }finally{
      if (this.emailSent) {
        this.responseToMail('succes');
      }else if (this.isError) {
        this.responseToMail('error');
      }
      setTimeout(() => {
        this.isSending = false;
        this.isError = false;
        this.emailSent = false;
      }, 2000);
    }
   

    this.myForm?.reset();
  }

  responseToMail(text: string){
    let sendMailResponse = document.getElementById('sendMailResponse');
    if (sendMailResponse) {
      sendMailResponse.classList.remove('d-none');
    }
    document.getElementById(text)?.classList.remove('d-none');  
    document.getElementById('background-senMailResponse')?.classList.remove('d-none');   
  }

  closeDialog(){
    let sendMailResponse = document.getElementById('sendMailResponse');
    if (sendMailResponse) {
      sendMailResponse.classList.add('d-none');
    }
    document.getElementById('succes')?.classList.add('d-none'); 
    document.getElementById('error')?.classList.add('d-none'); 
    document.getElementById('background-senMailResponse')?.classList.add('d-none'); 
  }
}
