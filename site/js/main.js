import "../scss/main.scss"; //parcel doesn't understand importing stylesheets in html but it understands them in js
import $ from "jquery";
import NextEmail from "./modules/new-email";
import HoverMessage from "./modules/hover-message";
import Draft from "./modules/draft";
import Lander from "./modules/lander";
import Background from "./modules/background";
import About from "./modules/about";
import Footer from "./modules/footer";

$(document).ready(function() {
  new NextEmail();
  new HoverMessage();
  new Draft();
  new Lander();
  new Background();
  new About();
  new Footer();
});
