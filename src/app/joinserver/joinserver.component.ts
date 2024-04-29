import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-joinserver',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './joinserver.component.html',
  styleUrl: './joinserver.component.scss'
})
export class JoinserverComponent {
  public joinForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.joinForm = this.fb.group({
      secretcode: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.joinForm.value.secretcode == "3548") {
      setTimeout(() => {
        this.joinForm.get('secretcode')?.setErrors(null);
        window.open("https://discord.gg/sTxJxWVfG8");
      } , 200);
    } else {
      this.joinForm.get('secretcode')?.setErrors({invalid: true});
      this.joinForm.setValue({secretcode: 'Invalid Code'});
    }
    setTimeout(() => {
      this.joinForm.get('secretcode')?.setErrors(null);
      this.joinForm.reset();
    } , 1000);
  }

}
