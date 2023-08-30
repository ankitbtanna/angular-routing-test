import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { SecondParentChild1Component } from './second-parent-child-1/second-parent-child-1.component';
import { SecondParentChild2Component } from './second-parent-child-2/second-parent-child-2.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondParentComponent,
    SecondParentChild1Component,
    SecondParentChild2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
