import { Component, LOCALE_ID } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { InscripcionesPage } from '../inscripciones/inscripciones';
import { TorneosService } from '../../services/torneosService/torneosService';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-Ar');

@Component({
  selector: 'page-torneos',
  templateUrl: 'torneos.html',
})
export class TorneosPage {

  // items: Array<{ titulo: string, imagen: string, fecha: string, lugar: string }>;
  torneos: any[];
  inscripciones;

  // CRISTIAN-COMMENT
  // Una vez cargados estos items en el backend borrar la variable items y reemplazar por torneos
  // Luego definir una clase torneo y reemplazarla

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private torneosService: TorneosService
  ) {
    this.inscripciones = InscripcionesPage;
  }

  public doInscripcion(event: any, item: any) {
    this.app.getRootNav().push(this.inscripciones, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TorneosPage');
    this.torneosService.getTorneos()
      .then(
        resp => {
          if (resp.control.codigo === 'OK') {
            this.torneos = resp.arraydatos;
            console.log(this.torneos);
          } else {
            // this.showAlert("Error", resp.descripcion)
          }
        }
      )
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.torneosService.getTorneos()
        .then(
          resp => {
            if (resp.control.codigo === 'OK') {
              resp.arraydatos.forEach(element => {
                this.torneos.push(element);
                console.log(this.torneos);
              });
            } else {
              // this.showAlert("Error", resp.descripcion)
            }
          }
        )

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
