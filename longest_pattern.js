var sampleString = "ssssmmmssssssssbbbfbfasdaasas";



var longestPattern = function(string, numChars) {
  if (numChars == 0){
    return string;
  }

  if (string.length > 0){
    var map = {};
    var longestString = '';
    var letters = string.split('');
    var charCount = 0;

    //lets start the next loop after we notice that repetition of the fist character ended.
    var indexOfLatestFirstChar = null;

    for (var i = 0; i< letters.length; i++){
      if (map[letters[i]]){
        longestString += letters[i];
      } else {
        map[letters[i]] = true;
        charCount++;

        // here is where we'll mark the index of the last repetition of the fist char
        if (!indexOfLatestFirstChar && charCount == 2){
          indexOfLatestFirstChar = i;
        }

        if (charCount > numChars){
          var nextLongestString = longestPattern(string.substr(indexOfLatestFirstChar,string.length), numChars);
          if (nextLongestString.length > longestString.length){
            return nextLongestString;
          } else{
            return longestString;
          }
        } else {
          longestString += letters[i];
        }
      }
    }
    return longestString;
  } else {
    return '';
  }
};