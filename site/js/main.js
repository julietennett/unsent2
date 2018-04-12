import "../scss/main.scss"; //parcel doesn't understand importing stylesheets in html but it understands them in js
import $ from "jquery";
import NewEmail from "./modules/new-email";
import HoverMessage from "./modules/hover-message";
import Draft from "./modules/draft";


$(document).ready(function() {
  new NewEmail();
  new HoverMessage();
  new Draft();
});
