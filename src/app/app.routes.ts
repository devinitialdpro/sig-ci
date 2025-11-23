import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './home/home/home';

import { BackgroundComponent } from './pages/background/background';
import { PendaftaranComponent } from './pages/pendaftaran/pendaftaran';
import { TimelineComponent } from './pages/timeline/timeline';

export const routes: Routes = [
  { path: '', component: LandingComponent },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'background', component: BackgroundComponent },
      { path: 'pendaftaran', component: PendaftaranComponent },
      { path: 'timeline', component: TimelineComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];
