import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public api="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=29fe471477cf44a19d6507ae3d413dd5";
  public articles=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews(){
    return this.http.get(this.api).subscribe(data=>{
      this.articles=data.articles;
    });
  }

}
