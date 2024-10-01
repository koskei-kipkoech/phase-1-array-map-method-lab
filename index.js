const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () =>{
  //const acronyms = ['API','OO','NaN','JSONP','stopPropagation','preventDefault'];
  return tutorials.map(tutorial => {
    const words= tutorial.split(' ');
    const firstCapitalWord = words.map(word =>{
      if(word === 'API'){
        return 'API'
      }
      else if(word === 'OO'){
        return 'OO'
      }
      else if(word === 'JSONP?'){
        return 'JSONP?'
      }
      if (word === 'stopPropagation'){
        return 'StopPropagation'
      }
      else if (word === 'preventDefault?'){
        return 'PreventDefault?'
      }
      else if(word === 'NaN'){
        return 'NaN'
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return firstCapitalWord.join(' ')
  });
}
const titleCasedTutorial = titleCased();
console.log(titleCasedTutorial)

