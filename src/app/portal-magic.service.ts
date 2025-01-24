import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ComponentPortal} from '@angular/cdk/portal';
import {Component1Component} from './componen-1/component-1.component';
import {Component2Component} from './component2/component2.component';

@Injectable({
  providedIn: 'root'
})
export class PortalMagicService {
  magic$ = new Subject<any>();

  componentPortal1: ComponentPortal<Component1Component> = new ComponentPortal(Component1Component);
  componentPortal2: ComponentPortal<Component2Component> = new ComponentPortal(Component2Component);

  private positions = [this.componentPortal1, this.componentPortal2];

  constructor() {
  }

  doMagic() {
    this.positions = this.positions.reverse()


    this.magic$.next(this.positions)
  }
}
