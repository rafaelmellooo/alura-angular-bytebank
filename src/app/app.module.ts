import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/pt';

registerLocaleData(locale, 'pt'); // registra o locale para o angular

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt' // define o idioma do aplicativo
    },
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' // define a moeda padrão do aplicativo
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
