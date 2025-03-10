function firstWord(s) {
      let trimmedStr = s.trim();

    // Find the index of the first space
    let spaceIndex = trimmedStr.indexOf(" ");

    // If no space is found, return the entire string
    return spaceIndex === -1 ? trimmedStr : trimmedStr.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
