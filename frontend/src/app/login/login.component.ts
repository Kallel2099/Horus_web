import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiserviceService } from '../apiservice.service';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  inscricao: Subscription = new Subscription();
  
  constructor(
    private service:ApiserviceService,
    private servise:AuthService,
    private router: Router
  ) { }

  errormsg:any;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();    
  }
  
  login() {
    this.inscricao = 
    this.service.getLogin(this.usuario.login).subscribe((res) => {
      if (this.usuario.login == '' || this.usuario.senha == '') {
        this.errormsg = 'Todos os campos são obrigatórios!';
      } else {
        if (res.data[0].Login == this.usuario.login && res.data[0].Senha == this.usuario.senha) {
        this.router.navigate(['main']);
        } else {
          this.errormsg = 'Login e/ou senha incorretos!';
        }
      }
    });
  }

  reloadPage(){
    location.reload();
  }

}
