import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electron-angular-demo';
  output: string = '';
  inputData = {
    inputString: '',
    secret: '',
  };

  encryptData() {
    let data = '';

    try {
      this.output = CryptoJS.AES.encrypt(
        JSON.stringify(this.inputData.inputString),
        this.inputData.secret
      ).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData() {
    try {
      const bytes = CryptoJS.AES.decrypt(
        this.inputData.inputString,
        this.inputData.secret
      );
      if (bytes.toString()) {
        this.output = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      } else {
        this.output = 'error in decrypting data';
      }
    } catch (e) {
      console.log(e);
    }
  }
}
