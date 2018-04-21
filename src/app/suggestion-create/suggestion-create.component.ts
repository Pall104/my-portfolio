import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suggestion-create',
  templateUrl: './suggestion-create.component.html',
  styleUrls: ['./suggestion-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuggestionCreateComponent implements OnInit {

    suggestion = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
    saveSuggestion() {
        this.http.post('/suggestion', this.suggestion)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}
