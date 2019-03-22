$(function(){
  
  //INCLUDE YOUR MODEL
  var modelObj = "https://cdn.glitch.com/4e5b3b69-d78c-4a38-88a2-7ee9114f9ad3%2Ftinker.obj?1547595054212";
  var modelMtl = "https://cdn.glitch.com/4e5b3b69-d78c-4a38-88a2-7ee9114f9ad3%2Fobj.mtl?1547595054121";
  
  $('#modelObj').attr('src',modelObj);
  $('#modelMtl').attr('src',modelMtl);
  
  //CUSTOMIZE YOUR TEXT
  var topText = "HSU Digital Media Lab \n 3D Model Viewer"; //set  your title text - just type between the quotes (no double quotes allowed!)
  var bottomText = "Click and drag or swipe to rotate around the HSU Library logo."; //set the text at the bottom here - just type between the quotes (no double quotes allowed!)
  
  $("#topText").attr('value',topText);
  $("#bottomText").attr('value',bottomText);
  
});