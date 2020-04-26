import { Component, OnInit } from '@angular/core';
import { Place } from 'app/shared/models';
import { SearchService } from 'app/shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public results$: Observable<Array<Place>>;

  constructor(private searchService: SearchService) {
    this.results$ = this.searchService.getPlaces('', '');
  }

  ngOnInit(): void {
  }

}
