import { Component, Output, EventEmitter } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Output() search: EventEmitter<string>  = new EventEmitter<string>();

  public value = '';
  public searchForm = this.fb.group({
    searchInput: ['', Validators.required],
  });

  faSearch = faSearch;
  faTimes = faTimes;

  constructor(private fb: FormBuilder) { }

  public onClear() {
    this.searchForm.setValue({ searchInput: '' });
  }

  public onSearch() {
    const val = this.searchForm.value();
    if (!val.searchInput) return;
    this.search.emit(val.searchInput);
  }
}
