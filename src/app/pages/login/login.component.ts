import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly sesionService: SessionService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem("Token")) {
      this.sesionService.hide();
    } else {
      this.sesionService.show();
    }
  }

  onSubmit() {
    this.sessionService.login(this.loginForm.value).subscribe((data: any) => {
      if (data.token) {
        sessionStorage.setItem("Token", data.token);
        this.sesionService.hide();
        this.router.navigate(['/post'])
      }
    })
  }


}
