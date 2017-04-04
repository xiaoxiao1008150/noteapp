import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NoteComponent } from './note/note.component';

export const routes: Routes = [
  { path: '', redirectTo: 'note',  pathMatch: 'full'},
  { path: 'note', component:NoteComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}










