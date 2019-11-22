$(document).ready(function() {
 //
 // add your jQuery code here
 $("#button1").addClass('makeRed');

 $("#button1").mouseenter(function() {
  $("#button1").addClass('makeBorder').removeClass('makeRed');
 });
 $("#button1").mouseleave(function() {
  $("#button1").addClass('makeRed').removeClass('makeBorder');
 });

 $("#button1").click(function() {
  $("#para1").slideToggle(2000);
 });
 
  $("#button2").click(function() {
  $("#para2").hide(1000).show(1000);
 });
});
