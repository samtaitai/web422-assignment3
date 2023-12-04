import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchEmitter = new EventEmitter<string>();

  onClick(text: string) {
    this.searchEmitter.emit(text);
  }
}
