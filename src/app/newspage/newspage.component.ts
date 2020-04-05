import { Component, OnInit } from '@angular/core';
import { NewsService } from '../newsService/newsservice.service';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  NewsArticle = [];

  ngOnInit(): void {
    this.getNewsContent();
    alert('Click on News Headline to Read Full News');
  }

  getNewsContent(): void {
    this.newsService.getNews().subscribe((data) => {
      this.NewsArticle = [...data.articles]
      console.log(this.NewsArticle);
    })
  }

}
