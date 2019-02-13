import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if (Meteor.isClient) {
  var img_data = [
  {
    img_src:"wallpaper1.jpg",
    img_alt:"womenscubadiving"
  },
  {
    img_src:"wallpaper2.jpg",
    img_alt:"Graffiti"
  },
  {
    img_src:"wallpaper3.jpg",
    img_alt:"Smokecolors"
  },
  ];

  Template.images.helpers(img_data);
}
