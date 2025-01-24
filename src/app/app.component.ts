import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Wrapper2Component} from './wrapper-2/wrapper-2.component';
import {Wrapper1Component} from './wrapper-1/wrapper-1.component';
import {PortalMagicService} from './portal-magic.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Wrapper2Component, Wrapper1Component],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portalTest';

  constructor(
    private portalMagicService: PortalMagicService
  ) {
  }

  magic() {
    this.portalMagicService.doMagic();
  }
}
