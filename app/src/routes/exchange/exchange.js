/**
 * Created by hzou on 3/27/16.
 */

angular
  .module('portfolio.exchange')
  .controller('exchangeController', ExchangeController);

function ExchangeController() {
  var self = this;

  self.products = getProducts();


  function getProducts() {
    return [{
      name       : "Saganizer corner shelf brown corner shelf unit 5 Tier corner shelves",
      image      : "http://ecx.images-amazon.com/images/I/71d-WWSgdiL._SY679_.jpg",
      href       : "http://www.amazon.com/Saganizer-corner-shelf-brown-shelves/dp/B013RXA7OU/ref=sr_1_3?ie=UTF8&qid=1459115030&sr=8-3&keywords=shelf",
      site       : "Amazon",
      description: ["price is a limited time offer, and this is 100% satisfaction guarantee.",
        "corner wall shelf Simple stylish design yet functional and suitable for any room",
        "Great storage unit for bathroom corner shelf, closet, home office, living room, kids room, kitchen, shower corner shelf etc",
        "Sturdy on flat surface and no hassle 5-minutes assembly",
        "Dimensions: 7.75x7.75x48.5 inche Black color to fit any decor attaches to both sides of the wall with only 2 nails or screws. With its contemporary black finish"]
    }, {
      name       : "Microsoft Surface 2",
      image      : "https://compass-ssl.surface.com/assets/37/a4/37a4c0f1-b493-4063-9207-e280a9c1b880.jpg?n=Desktop_Surface-2_Hero.jpg",
      href       : "https://www.microsoft.com/surface/en-us/devices/surface-2",
      site       : "Microsoft",
      description: ["The perfect tablet for work and play.",
        "At just under 1.5lbs, and pre-loaded with Office 2013 RT,1 Surface 2 lets you carry less while you do more."]
    }];
  }
}


