import {InjectionToken} from '@angular/core';

export const BG = new InjectionToken('bg')

export interface BgConfiguration {
  bg: string;
}

