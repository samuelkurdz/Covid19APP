import { Component, OnInit } from '@angular/core';
import { NewsService } from '../newsService/newsservice.service';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsContent();
  }

  getNewsContent(): void {
    this.newsService.getNews().subscribe((data) => {
      console.log(data.articles);
      
    })
  }

}
