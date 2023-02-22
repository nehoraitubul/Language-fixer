chrome.commands.onCommand.addListener(function(command) {
    if (command === 'convertToHebrew') {
        chrome.tabs.executeScript({file: "scripts.js"});
      }
    });