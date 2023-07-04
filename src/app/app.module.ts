import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoundedBlockDirective } from './directives/rounded-block.directive';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/ES';
import { StudentComponent } from './students/student/student.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    RoundedBlockDirective,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
