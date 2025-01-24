import {Component, Inject} from '@angular/core';
import {BG, BgConfiguration} from '../bg.service';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  standalone: true,
  styleUrl: './component-1.component.css'
})
export class Component1Component {

  constructor(
    @Inject(BG)
    public bg: BgConfiguration) {
  }

}
