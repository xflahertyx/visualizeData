$(function() {
  $('#sSort').hide();
  $('#cSort').hide();
});

var oneDiv = '<div></div>';
var newDiv = function(){
    $('p').after(oneDiv);
  };
var aClass = function(){
    $('div:first-of-type').addClass(rColor[randC]).addClass(rSize[randS]).text(randC);
  };


$('#push:button').on('click', function(){
  for (var i=0; i < 501; i++) {
    dPush(i);
  };
  $('#sSort').show();
  $('#cSort').show();
  $('#push').hide();
  $('p').hide();
});

//Scott Schmidt helped me get my variables in the proper scope
var dPush = function(){
  randC = Math.floor(Math.random()*10);
  randS = Math.floor(Math.random()*10);
  newDiv();
  aClass();
};

var rColor =["red", "orange", "yellow", "green", "blue", 
            "indigo", "violet", "white", "gray", "black"];

var rSize = ["size0", "size1", "size2", "size3", "size4", 
            "size5", "size6", "size7", "size8", "size9",];

//I found this sort via a google search and modified it. 
//It was originally set up to sort li tags to keep his lists ordered. 
//http://www.onemoretake.com/2009/02/25/sorting-elements-with-jquery/
$('#sSort:button').on('click', function(){
var mylist = $('section');
var listitems = mylist.children('div').get();
listitems.sort(function(a, b) {
   //Craig Chaille suggested sorting by width. 
   var compA = $(a).width();
   var compB = $(b).width();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });
});

$('#cSort:button').on('click', function(){
var mylist = $('section');
var listitems = mylist.children('div').get();
listitems.sort(function(a, b) {
   var compA = $(a).text();
   var compB = $(b).text();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });
});
