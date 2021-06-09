import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsearch';
  pages : Array<any> = [];
  constructor(private wikipediaService : WikipediaService){
    
  }
  onTerm(term:string){
   console.log("from app ", term);
   this.wikipediaService.search(term).subscribe((pages) =>{this.pages=pages })
   
  }
}
