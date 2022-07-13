/*
Example input/ouput
Sequence: [2,2,8]
Mapping: {2->[a,b,c], 8->[t,u,v]}
Output: [“act”, “bat” ,”cat”]
*/


isValidWord(word: string)

getValidWords = (numberSequence, mapping, index = 0, results = []) => {
	if (index === numberSequence.length){
		return ‘’;
	}
	
	for (let i = index; i < numberSequence.length; i++) {
		const currentDigit = numberSequence[i];
		const currentMapping = mapping[currentDigit];
		for (let k =0;k < currentMapping.length; k++) {
			currentMappingChar = currentMapping[k];
			getNextWord = getValidWords(numberSequence, mapping, index + 1, results);
			const finalWord = currentMappingChar + getNextWord;	

    	if (index === numberSequence.length - 1 && isValidWord(finalWord)){
		    results.push(finalWord);
	    } else {
		    return currentMappingChar + getNextWord;	
	    }
    }	 
  }
}
