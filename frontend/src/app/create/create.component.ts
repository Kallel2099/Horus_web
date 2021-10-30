import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparammat:any;

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('Matricula'), 'getMatricula');
    this.getparammat = this.router.snapshot.paramMap.get('Matricula');
    if (this.getparammat) {
      this.service.getSingleData(this.getparammat).subscribe((res) => {
      console.log(res, 'res==>');
        this.userForm.patchValue({
          matricula:res.data[0].Matricula,
          login:res.data[0].Login,
          nivel:res.data[0].Nivel,
          nome:res.data[0].Nome,
          senha:res.data[0].Senha
        })
      });
    }    
  }

  userForm = new FormGroup({
    'matricula':new FormControl('',Validators.required),
    'login':new FormControl('',Validators.required),
    'nivel':new FormControl('',Validators.required),
    'nome':new FormControl('',Validators.required),
    'senha':new FormControl('',Validators.required)
  });

  //create new user
  userSubmit(){
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'all field is required!';
    }
    
  }

  //uptade data
  userUpdate(){
    console.log(this.userForm.value, 'updateform');
    if (this.userForm.valid) {
      this.service.updateData(this.userForm.value, this.getparammat).subscribe((res) => {
        console.log(res, 'resupdated');
        this.successmsg = res.message;        
      });
    } else {
      this.errormsg = 'all field is required!';
    }
  }

}
