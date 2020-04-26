import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'app/shared/models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() place: Place;

  constructor() { }

  ngOnInit(): void {
  }

}
