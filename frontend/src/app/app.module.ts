import { ProductService } from './product.service';
import { AuthService } from './auth.service';
import { VideoService } from './video.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeSideComponent } from './home-side/home-side.component';
import {MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatStepperModule
      } from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';
import { NguiMapModule} from '@ngui/map';

import { MainScreenComponent } from './main-screen/main-screen.component';
import { BottomAdsComponent } from './bottom-ads/bottom-ads.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ScrollTextComponent } from './scroll-text/scroll-text.component';
import { RouterModule, Routes  } from '@angular/router';
import { MapComponent } from './map/map.component';
import { TrendsComponent } from './trends/trends.component';
import { NewsComponent } from './news/news.component';
import { LagosComponent } from './lagos/lagos.component';
import { ChatComponent } from './chat/chat.component';
import { CarouselComponent } from './carousel/carousel.component';
import {MatMenuModule} from '@angular/material/menu';
import { ManageVideosComponent } from './manage-videos/manage-videos.component';
import { VideosComponent } from './videos/videos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes = [
  {
    path: '',
    component: HomeMainComponent
  },
  {
    path: 'lagos',
    component: LagosComponent
  },
  {
    path: 'trends',
    component: TrendsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'manage-videos',
    component: ManageVideosComponent
  },
  {
    path: 'manage-videos/:url',
    component: ManageVideosComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    HomeSideComponent,
    MainScreenComponent,
    BottomAdsComponent,
    SideNavComponent,
    ScrollTextComponent,
    MapComponent,
    TrendsComponent,
    NewsComponent,
    LagosComponent,
    ChatComponent,
    CarouselComponent,
    ManageVideosComponent,
    VideosComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    NguCarouselModule,
    MatMenuModule,
    MatListModule,
    MatSnackBarModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    RouterModule.forRoot(routes),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCp9lNRFa0y6-e_dLzUgeWyfbfduhsrq04'})
  ],
  providers: [VideoService, AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
