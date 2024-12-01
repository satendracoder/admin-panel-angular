import { Component } from '@angular/core';
import { MateriallistModule } from '../../materiallist/materiallist.module';

@Component({
  selector: 'app-search-box',
  imports: [MateriallistModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
searchQuery: string = ''; // Track search input
  allItems: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew']; // Example items
  filteredResults: string[] = []; // Filtered search results

  // Filter the results based on the search query
  onSearch(): void {
    if (this.searchQuery) {
      this.filteredResults = this.allItems.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredResults = [];
    }
  }

  // When a search result is selected
  selectItem(item: string): void {
    this.searchQuery = item;
    this.filteredResults = []; // Hide dropdown after selection
  }

  // Handle form submission (if needed)
  onSearchSubmit(): void {
    console.log('Search Submitted:', this.searchQuery);
  }
}