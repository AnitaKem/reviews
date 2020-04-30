import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'app/shared/models';
import { SearchService } from 'app/shared/services';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() results: Array<string> = [];
  public results$: Observable<Array<Place>>;

  constructor(private route: ActivatedRouteSnapshot) {
    this.results$ = this.route.data as Observable<Array<Place>>;
  }

  ngOnInit(): void {
  }

}
