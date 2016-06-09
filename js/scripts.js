function convert(originalSentence) {
  var sentenceArray = originalSentence.toLowerCase().split(" ").join("").split("");
  var columnNum = Math.ceil(Math.sqrt(sentenceArray.length));
  var encryptedString= "";

  var totalArray = [], size = columnNum;
  while (sentenceArray.length > 0)
    totalArray.push(sentenceArray.splice(0, size));

    for (var i=0; i<columnNum; i++) {
      for (var k=0; k<totalArray.length; k++) {
        encryptedString += totalArray[k][i];
      }
    }
    var noUndefined = encryptedString.replace(/undefined/g, '');
    var chunks = [];
    var chunkSize = 5;
    while(noUndefined) {
        if (noUndefined.length < chunkSize) {
            chunks.push(noUndefined);
            break;
        }
        else {
            chunks.push(noUndefined.substr(0, chunkSize));
            noUndefined = noUndefined.substr(chunkSize);
        }
    }
    return chunks;
}

$(document).ready(function(){
  var originalSentence = prompt("Enter a sentence:");
  var result = convert(originalSentence);
  $("#result").text(result);
});
