import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ReUsableCardComponent } from './bootstrap-card/re-usable-card/re-usable-card.component';
import { TwitterLikeButtonComponent } from './twitter-like-button/twitter-like-button.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapPanelComponent,
    ReUsableCardComponent,
    TwitterLikeButtonComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
