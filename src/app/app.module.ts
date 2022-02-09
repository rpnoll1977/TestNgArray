import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XContainerComponent } from './x-container/x-container.component';
import { XLabelComponent } from './x-label/x-label.component';
import { XRootComponent } from './x-root/x-root.component';

@NgModule({
  declarations: [
    AppComponent,
    XContainerComponent,
    XLabelComponent,
    XRootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
