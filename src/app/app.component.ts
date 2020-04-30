import { Component } from '@angular/core';
import { SearchService } from './shared/services';
import { Observable } from 'rxjs';
import { Place } from './shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cities$: Observable<Array<string>>;
  public results$: Observable<Array<Place>>;

  public selectedCity: string;

  constructor(
    private searchService: SearchService,
    private router: Router,
  ) {
    this.cities$ = this.searchService.getCities();
    this.cities$.subscribe((cities: Array<string>) => {
      this.selectedCity = cities[0];
    });
   }

  public onCitySelected(city: string) {
    this.selectedCity = city;
  }

  public onSearch(text: string) {
    this.router.navigate(['/search'], { queryParams: { text, city: this.selectedCity }});
  }
}
