import { Component } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchForm = this.fb.group({
    searchInput: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {

  }
  public value = '';

  faSearch = faSearch;
  faTimes = faTimes;

  public clear() {
    this.searchForm.setValue({ searchInput: '' });
  }
}
