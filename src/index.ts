import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthComponent } from './ng-password-strength.component';

export * from './ng-password-strength.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PasswordStrengthComponent
  ],
  exports: [
    PasswordStrengthComponent
  ]
})
export class NgPasswordStrength {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgPasswordStrength,
    };
  }
}
