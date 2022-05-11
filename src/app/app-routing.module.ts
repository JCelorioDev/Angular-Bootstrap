import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonacionComponent } from './paginas/donacion/donacion.component';
import { HomeComponent } from './paginas/home/home.component';
import { ImagenesComponent } from './paginas/imagenes/imagenes.component';
import { SobrenosotrosComponent } from './paginas/sobrenosotros/sobrenosotros.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sobrenosotros', component: SobrenosotrosComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'donacion', component: DonacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
