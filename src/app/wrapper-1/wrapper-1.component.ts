import {AfterViewInit, Component, Inject} from '@angular/core';
import {Component1Component} from '../componen-1/component-1.component';
import {BG, BgConfiguration} from '../bg.service';
import {CdkPortalOutlet, ComponentPortal, Portal} from '@angular/cdk/portal';
import {PortalMagicService} from '../portal-magic.service';
import {Component2Component} from '../component2/component2.component';

@Component({
  selector: 'app-wrapper-1',
  imports: [
    Component1Component,
    CdkPortalOutlet
  ],
  templateUrl: './wrapper-1.component.html',
  standalone: true,
  styleUrl: './wrapper-1.component.css',
  providers: [
    {
      provide: BG,
      useFactory: () => ({
        bg: 'white'
      })
    }
  ]
})
export class Wrapper1Component implements AfterViewInit {
  portal1: Portal<any> | null = null;
  componentPortal: ComponentPortal<Component1Component | Component2Component> | null = null;

  constructor(
    @Inject(BG)
    public bg: BgConfiguration,
    private portalMagicService: PortalMagicService,
  ) {
    this.portalMagicService.magic$.subscribe((v) => {
      this.portal1 = v[1];
    })
  }

  ngAfterViewInit() {
    this.componentPortal = this.portalMagicService.componentPortal2
  }
}
