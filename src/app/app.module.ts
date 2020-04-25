import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgifForComponent } from './ngif-for/ngif-for.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgifForComponent,
    CrudComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LazyloadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
