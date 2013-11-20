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
//= require socket.io
//= require_tree .


$(function() {
  // $("#poll").click(function(e){
  //   e.preventDefault();
  //   var choice = $("#choice").val();
  //   var total = $("#total").val();
  //   $.get("api/poll_play",function(resp){
  //     if(resp.status == "true"){
  //       var row = create_row(resp);
  //       var correct=false;
  //       if(resp.play == choice){
  //         correct=true;
  //         total += 1;
  //       }
  //        else{
  //         total -= 1;
  //        }
  //       $("#score").html(correct);
  //       $("#total").html(total);
  //       $("#game-summary tr:last").after(row);
  //       $("#game-summary tr:last").effect("highlight", {color:'#EAC117'}, 2000);
  //     }
  //     else{
  //       var row = create_row(resp);
  //       $("#game-summary tr:last").after(row);
  //       $("#game-summary tr:last").effect("highlight", {color:'#EAC117'}, 2000);
  //       $("#score").html("no play");
  //     }
  //   });
  //   return false;
  // });
  $('table#schedule').on('click', 'tr', function() {
    var homeaway = $(this).attr("id").split("-");
    var href = 'api/game/'+homeaway[0]+'/'+homeaway[1];
    window.location = href;
  });

});

function create_row(data){
  var row = "<tr><td>"+data.team+"</td><td>"+data.clock+"</td><td>"+data.play+"</td><td>"+data.down+"</td><td>"+data.togo+"</td><td>"+data.yardline+"</td></tr>";
  return row;
}
