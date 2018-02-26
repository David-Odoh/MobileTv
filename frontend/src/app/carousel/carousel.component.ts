import { Observable } from 'rxjs/Observable';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselStore, NguCarouselService } from '@ngu/carousel';
import { MatIconRegistry, MatCard } from '@angular/material';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private carouselToken: string;

  // public carouselTileItems = Array<any>;
  public carouselTile: NguCarousel;

  constructor(private carousel: NguCarouselService, private productService: ProductService) {  }

  ngOnInit() {
     this.productService.getProducts('');
    // this.carouselTileItems = [{
    //                   imageUrl: 'http://angular-landing.mhrafi.com/assets/images/sq-10.jpg',
    //                   caption: 'Product One',
    //                   summary: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur'
    //                 }, {
    //                   imageUrl: 'http://angular-landing.mhrafi.com/assets/images/sq-11.jpg',
    //                   caption: 'Product Two',
    //                   summary: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur'
    //                 }, {
    //                   imageUrl: 'http://angular-landing.mhrafi.com/assets/images/sq-12.jpg',
    //                   caption: 'Product Three',
    //                   summary: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur'
    //                 }, {
    //                   imageUrl: 'http://angular-landing.mhrafi.com/assets/images/sq-13.jpg',
    //                   caption: 'Product Four',
    //                   summary: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur'
    //                 }, {
    //                   imageUrl: 'http://angular-landing.mhrafi.com/assets/images/sq-15.jpg',
    //                   caption: 'Product Five',
    //                   summary: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur'
    //                 }, {
    //                   imageUrl: 'http://angular-landing.mhrafi.com/assets/images/sq-16.jpg',
    //                   caption: 'Product Six',
    //                   summary: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur'
    //                 }
    //               ];

    this.carouselTile = {
      grid: {xs: 1, sm: 2, md: 2, lg: 3, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    };
  }

  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
  }

  resetFn() {
    this.carousel.reset(this.carouselToken);
  }

  moveToSlide() {
    this.carousel.moveToSlide(this.carouselToken, 2, false);
  }
}
