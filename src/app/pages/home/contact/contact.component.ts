import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formBody                      : any        = {
    name: "", 
    phone: "", 
    email: "", 
    message: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  validateFields(){
    const errors:any ={}

    var patternEmail=  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var phonePattern = /^\d{10}$/;


    if(!patternEmail.test(this.formBody.email)){
      errors.invalidEmail = "Ingresa un email válido";
    }

    if(!phonePattern.test(this.formBody.phone)){
      errors.invalidPhone = "Ingresa un teléfono celular válido";
    }
    if(this.formBody.message == ""){
      errors.invalidMessage = "Ingresa un mensaje válido";
    }

    if(this.formBody.name == ""){
      errors.invalidName = "Ingresa un nombre  válido";
    }

    console.log(errors);

    if(Object.keys(errors).length === 0){
      console.log("No hay errores");
    }else{
      console.log("Hay errores");
    }



  }

}
