import { Component } from '@angular/core';
import { SearchService } from './shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cities: Array<string> = ['Москва', 'Санкт-Петербург', 'Екатеринбург'];
  public cities$: Observable<Array<string>>;
  
  constructor(private searchService: SearchService) {
    this.cities$ = this.searchService.getCities();
    this.cities$.subscribe(t => {
      debugger;
    });
   }

  public onCitySelected(city: string) {

  }

  public onSearch(text: string) {
    
  }
}
