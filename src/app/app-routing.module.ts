import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportImageComponent } from './component/image/report-image/report-image.component';
import { ImageComponent } from './component/image/image.component';
import { ListadoImageComponent } from './component/image/listado-image/listado-image.component';

const routes: Routes = [
  {
    path: 'images', component: ImageComponent, children: [
      {
        path: 'reporte', component: ReportImageComponent
      },
      {
        path: 'listado', component: ListadoImageComponent // Agrega esta línea
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
