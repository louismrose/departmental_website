//= require_tree .
//= require jquery
//= require bootstrap
//= require conferencetracker

$(function() {
  var pageId = document.body.className;
  var navItem = $("#navigation li#" + pageId)[0];
  navItem.className = "active";
});