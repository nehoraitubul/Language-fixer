// document.addEventListener('keydown', function(event) {
    // if (event.ctrlKey && event.key === 'q') {

        if (window.getSelection) {

              allNodes = window.getSelection().focusNode.querySelectorAll('input')
              allNodes.forEach(element => {
                if (element === document.activeElement) {
                  selected = element
                }
              });
              console.log(selected);


              oldText = selected.value
              startIndex = selected.selectionStart;
              endIndex = selected.selectionEnd;


              console.log("my text: " + oldText);
              newText = oldText.slice(startIndex,endIndex)
              console.log("my selected text: " + newText);


              leftText =  oldText.slice(0, startIndex)
              rightText =  oldText.slice(endIndex)
              console.log(leftText + " " + rightText);

              replacement = convertToHebrew(newText)
              selected.value = (leftText + replacement + rightText)
 
    }
  // }
  // });


  function convertToHebrew(str) {
    const charMap = {
      'a': 'ש',
      'b': 'נ',
      'c': 'ב',
      'd': 'ג',
      'e': 'ק',
      'f': 'כ',
      'g': 'ע',
      'h': 'י',
      'i': 'ן',
      'j': 'ח',
      'k': 'ל',
      'l': 'ך',
      'm': 'צ',
      'n': 'מ',
      'o': 'ם',
      'p': 'פ',
      'q': '/',
      'r': 'ר',
      's': 'ד',
      't': 'א',
      'u': 'ו',
      'v': 'ה',
      'w': "'",
      'x': 'ס',
      'y': 'ט',
      'z': 'ז',
      ',': 'ת',
      '.': 'ץ',
      ';': 'ף',
      '/': '.',
      '[': ']',
      ']': '[',
      "'": ',',
    };
  
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
  
      if (charMap[char]) {
        result += charMap[char];
      } else {
        result += str[i];
      }
    }
  
    return result;
  }

  