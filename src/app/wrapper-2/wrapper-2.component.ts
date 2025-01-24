import
{AfterViewInit, Component, Inject} from '@angular/core';
import {Component2Component} from '../component2/component2.component';
import {BG, BgConfiguration} from '../bg.service';
import {CdkPortalOutlet, ComponentPortal, Portal} from '@angular/cdk/portal';
import {Component1Component} from '../componen-1/component-1.component';
import {PortalMagicService} from '../portal-magic.service';

@Component({
  selector: 'app-wrapper-2',
  imports: [
    Component2Component,
    CdkPortalOutlet
  ],
  templateUrl: './wrapper-2.component.html',
  standalone: true,
  styleUrl: './wrapper-2.component.css',
  providers: [
    {
      provide: BG,
      useFactory: () => ({
        bg: 'red'
      })
    }
  ]
})
export class Wrapper2Component implements AfterViewInit {
  portal2: Portal<any> | null = null
  componentPortal: ComponentPortal<Component1Component | Component2Component> | null = null;

  constructor(
    @Inject(BG)
    public bg: BgConfiguration,
    private portalMagicService: PortalMagicService,
  ) {
    this.portalMagicService.magic$.subscribe((v) => {
      this.portal2 = v[0]
    })
  }

  ngAfterViewInit() {
    this.componentPortal = this.portalMagicService.componentPortal1;
  }

}
