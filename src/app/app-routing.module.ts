import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: '', component: PlayerComponent },
  { path: 'profile', component: ProfileComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
