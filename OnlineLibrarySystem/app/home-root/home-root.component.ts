import { Component, OnInit } from '@angular/core';
import { Book } from '../Model';
import { someBooks, appTitle } from '../const';
declare var $: any;

@Component({
    selector: 'app-home-root',
    templateUrl: './home-root.component.html',
    styleUrls: ['./home-root.component.css']
})
export class HomeRootComponent implements OnInit {

    books: Book[] = someBooks;
    appTitle: string = appTitle;

    constructor() { }

    ngOnInit() {
        $('.carousel').carousel({
            interval: 3000
        });
    }

}
