//= require_tree .
//= require jquery
//= require bootstrap
//= require conferencetracker

$(function() {
  var pageId = document.body.className.split(" ")[0];
  var navItem = $("#navigation li#" + pageId)[0];
  navItem.className = "active";
});
