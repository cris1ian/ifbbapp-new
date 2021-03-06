import { AcercaPage } from './../pages/acerca/acerca';
import { CalendarioPage } from './../pages/calendario/calendario';
import { MisTorneosPage } from './../pages/mis-torneos/mis-torneos';
import { TorneosPage } from './../pages/torneos/torneos';
import { UserPage } from './../pages/user/user';
import { CursosPage } from './../pages/cursos/cursos';
import { PromosPage } from './../pages/promos/promos';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { NewsPage } from '../pages/news/news';
import { IfbbPage } from '../pages/ifbb/ifbb';
import { InscripcionesPage } from '../pages/inscripciones/inscripciones';
import { NoticiasInternacionalesPage } from '../pages/noticias-internacionales/noticias-internacionales';
import { SaludBienestarPage } from '../pages/salud-bienestar/salud-bienestar';
import { EscuelaIfbbPage } from '../pages/escuela-ifbb/escuela-ifbb';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/authService/authService';
import { LoginService } from '../services/loginService/loginService';
import { NewsService } from '../services/newsService/newsService';
import { LocalStorageService } from '../services/localStorageService/localStorageService';
import { HomePage } from '../pages/home/home';
import { SwipeTabDirective } from '../directives/swipe-tab.directive';
import { SaludBienestarService } from '../services/saludBienestarService/saludBienestarService';
import { TorneosService } from '../services/torneosService/torneosService';
import { SaludBienestarEntrenamientoPage } from '../pages/salud-bienestar-entrenamiento/salud-bienestar-entrenamiento';
import { SaludBienestarNutricionPage } from '../pages/salud-bienestar-nutricion/salud-bienestar-nutricion';
import { SaludBienestarSuplementosPage } from '../pages/salud-bienestar-suplementos/salud-bienestar-suplementos';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    PromosPage,
    CursosPage,
    LoginPage,
    UserPage,
    TorneosPage,
    IfbbPage,
    MisTorneosPage,
    CalendarioPage,
    AcercaPage,
    InscripcionesPage,
    NoticiasInternacionalesPage,
    SaludBienestarPage,
    EscuelaIfbbPage,
    HomePage,
    SwipeTabDirective,
    SaludBienestarEntrenamientoPage,
    SaludBienestarNutricionPage,
    SaludBienestarSuplementosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    PromosPage,
    CursosPage,
    LoginPage,
    UserPage,
    TorneosPage,
    IfbbPage,
    MisTorneosPage,
    CalendarioPage,
    AcercaPage,
    InscripcionesPage,
    NoticiasInternacionalesPage,
    SaludBienestarPage,
    EscuelaIfbbPage,
    HomePage,
    SaludBienestarEntrenamientoPage,
    SaludBienestarNutricionPage,
    SaludBienestarSuplementosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    LoginService,
    LocalStorageService,
    NewsService,
    SaludBienestarService,
    TorneosService,
    { provide: LOCALE_ID, useValue: 'es-Ar' }
  ]
})
export class AppModule {}
