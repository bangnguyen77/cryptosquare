function convert(originalSentence) {
  var sentenceArray = originalSentence.toLowerCase().split(" ").join("").split("");
  var columnNum = Math.ceil(Math.sqrt(sentenceArray.length));

  var arrays = [], size = columnNum;
  while (sentenceArray.length > 0)
      arrays.push(sentenceArray.splice(0, size));
  console.log(arrays);
};










$(document).ready(function(){
  var originalSentence = prompt("Enter a sentence:");
  var result = convert(originalSentence);
  $("#result").text(result);
});
