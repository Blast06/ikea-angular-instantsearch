import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ikea Angular Instantsearch';

  algoliaConfig = {
    apiKey: '3f46604e5ceef1479ae2ca58ae4f0a71',
    appId: 'ZSL0RJTCOE',
    indexName: 'ikea'
  }

}
