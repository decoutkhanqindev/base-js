// Hightlight all of the words over 8 characters long in the paragraph text with a yellow background
const paragraph = document.getElementById('paragraph')
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
  .join(" ")

// Add a link back to the source of the text after the paragraph tag
// (https://www.google.com/)
const link = document.createElement('a')
link.href = 'https://www.google.com/'
link.innerText = 'https://www.google.com/'
paragraph.appendChild(document.createElement('p'))
paragraph.appendChild(link)

// Split each new sentence on to a new line in the paragraph text
// a sentence can be assumed to be a string of text terminal with a period (.)
paragraph.innerHTML = paragraph.innerHTML
  .split(/\.[^\.|<]/)
  .join("<p></p>")  

// Count the number of words in the paragraph tag and display the count after the heading
// You can assume that all words are separated by one whitespace character
const countOfWord = paragraph.innerText.split(" ").length
const countOfWordElement = document.createElement('p')
countOfWordElement.innerText = `${countOfWord} words`
paragraph.parentElement.insertBefore(countOfWordElement, paragraph)

// Replace all question marks (?) with thinking face emoji (🤔)
// and exclamation marks (!) with astonished face emoji (😲)
paragraph.innerHTML = paragraph.innerHTML
  .replace(/\?/g, "🤔")
  .replace(/\!/g, "😲")