import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SuggestionCreateComponent } from './suggestion-create/suggestion-create.component';

const appRoutes: Routes = [

    {
        path: 'suggestion-create',
        component: SuggestionCreateComponent,
        data: { title: 'Create Suggestion' }
    }
   ];

@NgModule({
  declarations: [
    AppComponent,
    SuggestionCreateComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
