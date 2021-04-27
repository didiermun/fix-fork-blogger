import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TrendingBlogsComponent } from './trending-blogs/trending-blogs.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SwiperModule } from 'swiper/angular';
import { OtherBlogsComponent } from './other-blogs/other-blogs.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes : Routes = [

 ]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    WelcomePageComponent,
    TrendingBlogsComponent,
    OtherBlogsComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    SwiperModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
