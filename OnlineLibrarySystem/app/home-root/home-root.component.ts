import { Component, OnInit } from '@angular/core';
import { appTitle } from '../const';
import { Http } from '@angular/http';
declare var $: any;

@Component({
    selector: 'app-home-root',
    templateUrl: './home-root.component.html',
    styleUrls: ['./home-root.component.css']
})
export class HomeRootComponent implements OnInit {

    books: any[];
    appTitle: string = appTitle;

    constructor(http: Http) {
        http.get('/api/ApiBook/GetMostPopular?count=8').subscribe(books => this.books = books.json());
    }

    ngOnInit() {
        $('.carousel').carousel({
            interval: 3000
        });
    }

}
