import { Component } from '@angular/core';
import { TopbarComponent } from "../shared/topbar/topbar.component";
import { HeaderComponent } from "../shared/header/header.component";


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TopbarComponent, HeaderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
