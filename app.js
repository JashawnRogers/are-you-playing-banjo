function areYouPlayingBanjo(name) {
    // create new variable to hold array of name and convert to lowercase
    const nameArr = name.toLowerCase().split('');
    // check if nameArr's first letter is equal to 'r'
    if (nameArr[0] === 'r') {
        name += ' plays banjo';
    } else {
        //if name does not equal r, print name + "does not play banjo"
        name += ' does not play banjo';
    }

    return name;
  }
  areYouPlayingBanjo('Jashawn');
