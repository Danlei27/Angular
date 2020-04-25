import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgifForComponent } from './ngif-for/ngif-for.component';
                        //declarando um componente, a uma rota
                        //nome do componete:'DataBindingComponen' que pode se pego na class components     
const routes: Routes = [//nome da rota:'primeiro-componente
  {
    path: '',
    component: NgifForComponent
  },
  { path: 'lazy', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(
    m => m.LazyloadingModule)},

  { path: 'primeiro-componente', component: DataBindingComponent },
  { path: 'segundo-componente', component: SegundoComponenteComponent },
  { path: 'teste', component: NgifForComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
