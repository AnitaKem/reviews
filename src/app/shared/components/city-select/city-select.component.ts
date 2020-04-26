import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.scss']
})
export class CitySelectComponent implements OnInit {
  @Input() cities: Array<string> = [];
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.selected.emit(value);
  }
}
