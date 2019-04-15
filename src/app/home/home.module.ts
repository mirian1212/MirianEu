import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {ComponentPar} from '../componentes/par/component.par';
import {ComponentImpar} from '../componentes/impar/component.impar';
import {ComponentmaiorNumero} from '../componentes/maiorNumero/component.maiorNumero';
import {ComponentImagem} from '../componentes/imagem/component.imagem';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ComponentPar, ComponentImpar, ComponentmaiorNumero, ComponentImagem]
})
export class HomePageModule {}
