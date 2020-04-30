import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './shared/containers';
import { SearchResolverService } from './shared/services';


const routes: Routes = [
  {
    path: 'search',
    component: SearchResultsComponent,
    resolve: {
      places: SearchResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
