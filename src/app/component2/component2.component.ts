import {Component, Inject} from '@angular/core';
import {BG, BgConfiguration} from '../bg.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  standalone: true,
  styleUrl: './component2.component.css'
})
export class Component2Component {
  constructor(
    @Inject(BG)
    public bg: BgConfiguration) {
  }

}
