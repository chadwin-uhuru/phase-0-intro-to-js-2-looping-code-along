// WriteCards function
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // CountDown function
  function countDown(start) {
    while (start >= 0) {
      console.log(start);
      start--;
    }
  }
  