import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './login/auth.service';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TextilComponent } from './textil/textil.component';
import { LavarComponent } from './lavar/lavar.component';
import { PrepararComponent } from './preparar/preparar.component';
import { EsterilizarComponent } from './esterilizar/esterilizar.component';
import { ArmazenarComponent } from './armazenar/armazenar.component';
import { DistribuirComponent } from './distribuir/distribuir.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { LeitorlavComponent } from './leitorlav/leitorlav.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    LoginComponent,
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    ConteudoComponent,
    DashboardComponent,
    TextilComponent,
    LavarComponent,
    PrepararComponent,
    EsterilizarComponent,
    ArmazenarComponent,
    DistribuirComponent,
    GerenciarComponent,
    LeitorlavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiserviceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
