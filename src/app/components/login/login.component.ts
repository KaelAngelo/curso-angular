import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbCollapseModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
