import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { HoverDirective } from './hover.directive';
import { RouterModule } from '@angular/router';
import { OutputGraphComponent } from './output-graph/output-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    HoverDirective,
    OutputGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'one', component: OneComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'one', pathMatch: 'full' },
      { path: 'output-graph', component: OutputGraphComponent, pathMatch: 'full' },
      { path: '*', component: OneComponent },
      { path: '**', component: OneComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
