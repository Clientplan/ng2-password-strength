import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'password-strength',
  template: `<div class="progress">
      <input type="password" (keyup)="onKey($event)" ngClass="{{class}}" id="{{id}}">
      <p>{{values}}</p>
      <div class="progress_bar" [ngStyle]="{'width': width + '%', 'background': color}">
      </div>
      {{message}}
      <div ngClass="{{symbool.isit}}">Symbol</div>
      <div ngClass="{{nucbool.isit}}">Uppercase Char</div>
      <div ngClass="{{numbool.isit}}">Number</div>
  </div>
  `,
  styles: [`
      .progress_bar{
          width: 0;
          height: 5px;
          padding: 0;
          margin: 0;
      }
      .true {
          color: green;
      }
      .false {
          color: red;
      }
  `],})
export class PasswordStrengthComponent {

  @Input() class:string = '';
  @Input() id:string = '';

  constructor(private forms:FormsModule) {}

  public width = 1;
  private value:string;
  public colors:any = ['#D9534F','#DF6A4F','#E5804F','#EA974E','#F0AD4E','#D2AF51','#B5B154','#97B456','#7AB659','#5CB85C','#5CB85C'];
  public color = '#D9534F';
  public message:string = "You password must be at least 6 characters in length and contain the following:-";
  private symbool:object = {'isit':'false'};
  private nucbool:object = {'isit':'false'};
  private numbool:object = {'isit':'false'};

  onKey(event: any) {
    this.value = event.target.value;

    // Additions :-D
    let noc = this.value.length; // Number of Characters
    let nuc = this.value.replace(/[^A-Z]/g, "").length; // Uppercase Letters
    let nlc = this.value.replace(/[^a-z]/g, "").length; // Lowercase Letters
    let num = this.value.replace(/[^0-9]/g, "").length; // Numbers
    let symr:number;
    let sym = this.value.match(/[ !@#$£%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g); // Symbols
    if(!sym) { symr = 0 } else { symr = sym.length};

    // Deductions :-(
    let aucr:number; // Letters Only Resolver
    let auc = this.value === this.value.toUpperCase(); if(auc == false) {aucr = noc} else {aucr = 0}; // Letters Only
    let anvr:number; // Number Only Resolver
    let anv = +this.value;  if(anv !== NaN || anv !== 0) {anvr = noc} else {anvr = 0}; // Numbers Only
    let cons:number; // Repeat Characters Resolver
    if(this.value.match(/(.)\1\1/)) {cons = noc*noc} else {cons = 0} // Repeat Characters

    // The MF math
    let additions = ((noc*4)+((noc-nuc)*2)+((nlc-nuc)*2)+(num*4)+((symr)*6));
    let deductions = ((aucr)+(anvr)+cons);
    let total = additions-deductions;
    if(sym == null) {
      this.symbool['isit'] = false;
    } else {
      this.symbool['isit'] = true;
    }
    if (nuc == 0) {
      this.nucbool['isit'] = false;
    } else {
      this.nucbool['isit'] = true;
    }
    if (num == 0) {
      this.numbool['isit'] = false;
    } else {
      this.numbool['isit'] = true;
    }
    if (total < 101) {
      if(total < 0) {
        this.width = 1;
      } else {
        this.width = total;
      }
    } else {
      this.width = 100;
    }
    this.updateBar();
  }

  updateBar() {
    var i = Math.round(this.width/10);
    this.color = this.colors[i];
  }
}
