import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

  var img_data = [
  {
    img_src:'./wallpaper1.jpg',
    img_alt:'womenscubadiving'
  },
  {
    img_src:'./wallpaper2.jpeg',
    img_alt:'Graffiti'
  },
  {
    img_src:'./wallpaper3.jpeg',
    img_alt:'Smokecolors'
  },
  {
    img_src:'./wallpaper4.jpeg',
    img_alt:'Snowing on the street'
  },
  {
    img_src:'./wallpaper5.jpeg',
    img_alt:'Taj Mahal'
  },
  {
    img_src:'./wallpaper6.jpeg',
    img_alt:'Ruins'
  },
  {
    img_src:'./wallpaper7.jpeg',
    img_alt:'Pool Party'
  },
  {
    img_src:'./wallpaper8.jpeg',
    img_alt:'Hong Kong'
  },
  {
    img_src:'./wallpaper9.jpeg',
    img_alt:'Bali, Indonesia'
  },
  ];

  Template.images.helpers({images:img_data});

