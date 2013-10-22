// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .


$(function() {
  $("#poll").click(function(e){
    e.preventDefault();
    $.get("api/poll_play",function(resp){
      var row = create_row(resp);
      $("#game-summary tr:last").after(row);
      $("#game-summary tr:last").effect("highlight", {color:'#EAC117'}, 2000);
    });
    return false;
  });


});

function create_row(data){
  var row = "<tr><td>"+data.team+"</td><td>"+data.clock+"</td><td>"+data.play+"</td><td>"+data.down+"</td><td>"+data.togo+"</td><td>"+data.yardline+"</td></tr>";
  return row;
}
