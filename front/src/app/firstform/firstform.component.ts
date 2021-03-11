import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from "../validators/validators";

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent implements OnInit {

  form: FormGroup;

 userregpattern     = '[a-z]*';
 passwordregpattern = '[a-z]*';


  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ["Carlos",[Validators.required, Validators.minLength(2), Validators.pattern(this.userregpattern )]],
      password: ["",[Validators.required, Validators.pattern( this.passwordregpattern )]],
      url: ['https://',[Validators.required, ValidateUrl]]
    });
  }

  onSubmit(_datosForm){
    console.log(_datosForm.value);
  }

}
