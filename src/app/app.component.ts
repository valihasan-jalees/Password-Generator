import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  password = "";
  letters : boolean = false;
  numbers : boolean = false;
  symbols : boolean = false;
  length = 0;
  inputLength(value:string){
    const parsed = parseInt(value);
    if(!isNaN(parsed)){
      this.length = parsed;
    }
  }
  // let checked(){
  //   return (letters || numbers || symbols);
  // }
  useLetters(){
    this.letters = !this.letters;
  }
  useNumbers(){
    this.numbers = !this.numbers;
  }
  useSymbols(){
    this.symbols = !this.symbols;
  }
  onButtonClick(){
    const possibleLetters = "abcdefghijklmnopqrstuvwxyz";
    const possibleNumbers = "0123456789";
    const possibleSymbols = "!@#$%^&*()-_";

    let validChars = "";
    if(this.letters) validChars += possibleLetters;
    if(this.numbers) validChars += possibleNumbers;
    if(this.symbols) validChars += possibleSymbols;
    console.log(validChars);
    let generatedPassword = "";
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
