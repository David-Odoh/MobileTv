import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  places = {};
  positions = [];
  slideControl;
  carretControl;
  mapObject;


  constructor() {

    this.slideControl = 'b-slide-menu opened oopeen';
    this.carretControl = 'fa fa-caret-left';
    }

  ngOnInit() {
    this.places = [{
        name: 'Silverbird Cinema Galleria, VI',
        location_latitude: 6.5674341,
        location_longitude:  3.3650782,
        imageUrl: '../assets/images/nav-elements/places/silverbird-lekki.png',
        Category: 'Cinema',
        address: 'Address: Address: 133 Ahmadu Bello Way, Victoria Island, Lagos - Phone: 0802 339 5355',
        city: 'Victoria Island'
      }, {
        name: 'Genesis Cinemas - Maryland Mall',
        location_latitude: 6.5121207,
        location_longitude:  3.3027646,
        imageUrl: '../assets/images/nav-elements/places/imax.png',
        Category: 'Cinema',
        address: 'Address: Maryland Mall, Ikorodu Rd, Anyony, Lagos - Phone: 0909 863 4784',
        city: 'Maryland'
      }, {
        name: 'Eko Hotel & Suites',
        location_latitude: 6.4264353,
        location_longitude:  3.4287171,
        imageUrl: '../assets/images/nav-elements/places/eko.png',
        Category: 'Hotel',
        address: '1415, Adetokunbo Ademola Street, Victoria Island Eti Osa, Lagos Nigeria - Phone: 01-2772700, 01-277272501-2704071',
        city: 'Victoria Island'
      }, {
        name: 'Shoprite',
        location_latitude: 6.6139607,
        location_longitude:  3.3559747,
        imageUrl: '../assets/images/nav-elements/places/shoprite.png',
        Category: 'Hotel',
        address: 'Address: Obafemi Awolowo Way, Oregun 100001, Lagos Nigeria - Phone: 01-2772700, 01-277272501-2704071',
        city: 'Victoria Island'
      }, {
        name: 'Neo Restaurant',
        location_latitude: 6.5844405,
        location_longitude:  3.3551021,
        imageUrl: '../assets/images/nav-elements/places/neo.png',
        Category: 'Restaurant',
        address: '1415, Adetokunbo Ademola Street, Victoria Island Eti Osa, Lagos Nigeria - Phone: 01-2772700, 01-277272501-2704071',
        city: 'Victoria Island'
      }, {
        name: 'Quilox Victoria Island',
        location_latitude: 6.4377202,
        location_longitude:  3.4051672,
        imageUrl: '../assets/images/nav-elements/places/quilox.png',
        Category: 'Club',
        address: '873 Ozumba Mbadiwe Ave, Victoria Island, Lagos Nigeria - Phone:  01 454 6590',
        city: 'Victoria Island'
      }, {
        name: 'Escape',
        location_latitude: 6.434378,
        location_longitude:  3.4272089,
        imageUrl: '../assets/images/nav-elements/places/escape.png',
        Category: 'Club',
        address: '14 Adeola Hopewell St, Victoria Island, Lagos Nigeria - Phone:  0702 614 2208',
        city: 'Victoria Island'
      }
    ];
  }

  toggleSlide() {
    this.slideControl =  (this.slideControl === 'b-slide-menu opened oopeen')
                         ? 'b-slide-menu closed closseed' : 'b-slide-menu opened oopeen';
    this.carretControl =  (this.carretControl === 'fa fa-caret-left') ? 'fa fa-caret-right' : 'fa fa-caret-left';
  }

  applyFilter() { }

}



// ,
// {
// name: 'Silverbird Cinema Galleria, VI',
// location_latitude: '6.5121207',
// location_longitude:  '3.3027646',
// map_image_url: '../../wp-content/uploads/2017/09/silverbird-lekki.png',
// name_point: 'Silverbird Cinema Galleria, VI',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/195.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 133 Ahmadu Bello Way, Victoria Island, Lagos <br>Phone: 0802 339 5355',
// url_point: 'https://city2.wpmix.net/places/vue-islington-cinema/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Filmhouse cinemas - IMAX',
// location_latitude: '6.4904547',
// location_longitude:  '3.354778',
// map_image_url: '../../wp-content/uploads/2017/09/imax.png',
// name_point: 'Filmhouse cinemas - IMAX',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/195.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 30B Adeniran Ogunsanya St, Surulere, Lagos <br>Phone: 0902 479 3085',
// url_point: 'https://city2.wpmix.net/places/cinema/',
// moreinfo: 'More info'
// }
// ]
// ,                'entertainments': [

// {
// name: 'Games in Lagos',
// location_latitude: '6.497186',
// location_longitude:  '3.3647141',
// map_image_url: '../../wp-content/uploads/2017/09/games.png',
// name_point: 'Games in Lagos',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/194.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: Surulere, Lagos <br>Opened: 1961 <br>Capacity: 55,000 (1972); 45,000 (1999)',
// url_point: 'https://city2.wpmix.net/places/theatre-royal-drury-lane/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Musical Theater',
// location_latitude: '6.6228982',
// location_longitude:  '3.3571165',
// map_image_url: '../../wp-content/uploads/2017/09/theater.png',
// name_point: 'Musical Theater',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/194.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Nerdc Rd, Agidingbi, Ikeja',
// url_point: 'https://city2.wpmix.net/places/pure-synergie-beauty-salons/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Themed Parks',
// location_latitude: '6.4821329',
// location_longitude:  '3.3571165',
// map_image_url: '../../wp-content/uploads/2017/09/themed-park.png',
// name_point: 'Skate park',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/194.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: `KM 35, Epe Expressway, Off Pan African University, Lagos <br>Tuesdays
//  to Fridays -10:30am – 7:00pm <br>Saturday and Public Holidays 9:30am – 8:00pm <br>Sundays: 12:30pm – 8:00pm`,
// url_point: 'https://city2.wpmix.net/places/skate-park/',
// moreinfo: 'More info'
// }
// ]
// ,                'hotels': [

// {
// name: 'Eko Hotel & Suites',
// location_latitude: '6.4264353',
// location_longitude:  '3.4287171',
// map_image_url: '../../wp-content/uploads/2017/09/eko.png',
// name_point: 'Eko Hotel & Suites',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/196.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: `Address: 1415, Adetokunbo Ademola Street, Victoria
//  Island Eti Osa, Lagos Nigeria <br>Phone: 01-2772700, 01-277272501-2704071`,
// url_point: 'https://city2.wpmix.net/places/mondrian-london/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Southern Sun Hotel',
// location_latitude: '6.4581276',
// location_longitude:  '3.4714504',
// map_image_url: '../../wp-content/uploads/2017/09/southern-sun.png',
// name_point: 'Southern Sun Hotel',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/196.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: `Address: 47, Alfred Rewane Road, Former Kingsway Road, Ikoyi
// , Lagos Island Nigeria <br>Phone: 08066440497, 08066861188, 01-2805200`,
// url_point: 'https://city2.wpmix.net/places/m-by-montcalm/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Zaaz Hotels Limited',
// location_latitude: '6.5966023',
// location_longitude: '3.352907',
// map_image_url: '../../wp-content/uploads/2017/09/zaaz.png',
// name_point: 'Zaaz Hotels Limited',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/196.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: `Address: 4, Allen Avenue, Ikeja, Lagos Nigeria <br>Phone:
//  +234 815 177 7719, +234 816 090 0055, +234 808 885 0886+234 1 460 5101`,
// url_point: 'https://city2.wpmix.net/places/hotels/',
// moreinfo: 'More info'
// }
// ]
// ,                'night-life': [

// {
// name: 'Quilox Victoria Island',
// location_latitude: '6.4377202',
// location_longitude:  '3.4051672',
// map_image_url: '../../wp-content/uploads/2017/09/quilox.png',
// name_point: 'Quilox Victoria Island',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/204.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 873 Ozumba Mbadiwe Ave, Victoria Island, Lagos <br>Hours: Open today · 10PM–5AM <br>Phone: 01 454 6590',
// url_point: 'https://city2.wpmix.net/places/3345/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Escape',
// location_latitude: '6.434378',
// location_longitude:  '3.4272089',
// map_image_url: '../../wp-content/uploads/2017/09/escape.png',
// name_point: 'A Concert Hall',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/204.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 14 Adeola Hopewell St, Victoria Island, Lagos <br>Phone: 0702 614 2208',
// url_point: 'https://city2.wpmix.net/places/entertainments/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'The Cave',
// location_latitude: '6.4310693',
// location_longitude:  '3.4317579',
// map_image_url: '../../wp-content/uploads/2017/09/cave.png',
// name_point: 'Night club',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/204.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 292c Ajose Adeogun St, Victoria Island, Lagos <br>Hours: Open today · 3AM–12:55AM <br>Phone: 0709 425 3393',
// url_point: 'https://city2.wpmix.net/places/night-club/',
// moreinfo: 'More info'
// }
// ]
// ,                'restaurant': [

// {
// name: 'Utazi Restaurant',
// location_latitude: '6.4330866',
// location_longitude:  '3.4346378',
// map_image_url: '../../wp-content/uploads/2017/09/utazi.png',
// name_point: 'Utazi Restaurant',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/190.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: Etim Inyang Cres, Victoria Island, Lagos <br>Hours: Open today · 9AM–10PM <br>Phone: 0909 000 3007',
// url_point: 'https://city2.wpmix.net/places/mms-world/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Kilmanjaro',
// location_latitude: '6.4313478',
// location_longitude:  '3.4221786',
// map_image_url: '../../wp-content/uploads/2017/09/kilomajaro.png',
// name_point: 'Kilmanjaro',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/190.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: `Address: Corner Of Sanusi Fafunwa, Opposite Fidelity Bank,
// Adeyemo Alakija St, Lagos <br>Hours: Open today · 8AM–10PM <br>Phone: 0807 509 1497`,
// url_point: 'https://city2.wpmix.net/places/crystal-palace-antique-and-modern-warehouse/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Neo Restaurant',
// location_latitude: '6.5844405',
// location_longitude:  '3.3551021',
// map_image_url: '../../wp-content/uploads/2017/09/neo.png',
// name_point: 'Neo Restaurant',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/190.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 45 Isaac John St, Ikeja GRA, Ikeja <br>Hours: Open today · 8AM–10PM <br>Phone: 0813 656 8455',
// url_point: 'https://city2.wpmix.net/places/morrisons/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Buka',
// location_latitude: '6.5801335',
// location_longitude:  '3.3564661',
// map_image_url: '../../wp-content/uploads/2017/09/buhka.png',
// name_point: 'Buka',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/190.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 21 Isaac John St, Ikeja GRA, Ikeja <br>Hours: Open today · 9AM–10PM <br>Phone: 0814 078 9802',
// url_point: 'https://city2.wpmix.net/places/shop/',
// moreinfo: 'More info'
// }
// ]
// ,                'shopping': [

// {
// name: 'Gracemade Bakery',
// location_latitude: '6.4430866',
// location_longitude:  '3.4456378',
// map_image_url: '../../wp-content/uploads/2017/09/gracemade-bakery.png',
// name_point: 'Gracemade Bakery',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/205.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: Etim Inyang Cres, Victoria Island, Lagos <br>Hours: Open today · 9AM–10PM <br>Phone: 0909 000 3007',
// url_point: 'https://city2.wpmix.net/places/mms-world/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Kilmanjaro',
// location_latitude: '6.5951819',
// location_longitude:  '3.3540595',
// map_image_url: '../../wp-content/uploads/2017/09/osata.png',
// name_point: 'Kilmanjaro',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/205.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: Opebi, Lagos <br>Hours: Open today · 8AM–8:30PM<br>Phone: 0704 111 6683',
// url_point: 'https://city2.wpmix.net/places/crystal-palace-antique-and-modern-warehouse/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'Shoprite',
// location_latitude: '6.6139607',
// location_longitude:  '3.3559747',
// map_image_url: '../../wp-content/uploads/2017/09/shoprite.png',
// name_point: 'Shoprite',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/205.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: Obafemi Awolowo Way, Oregun\ 100001, Lagos',
// url_point: 'https://city2.wpmix.net/places/morrisons/',
// moreinfo: 'More info'
// }
// ,
// {
// name: 'CAsh "N" carry',
// location_latitude: '6.5801335',
// location_longitude:  '3.3564661',
// map_image_url: '../../wp-content/uploads/2017/09/cashncarry.png',
// name_point: 'CAsh "N" carry',
// fa_icon: 'https://city2.wpmix.net/wp-content/uploads/205.png',
// km: '',
// time: '',
// fetaturesicon: '',
// description_point: 'Address: 20 Kodesoh St, Opebi, Ikeja <br>Hours: Open today · 10AM–6PM <br>Phone: 0709 800 6533',
// url_point: 'https://city2.wpmix.net/places/shop/',
// moreinfo: 'More info'
// }
// ]
//   };