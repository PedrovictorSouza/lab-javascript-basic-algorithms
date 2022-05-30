// Iteration 1: Names and Input
let hacker1 = "Bob";

console.log("The driver's name is " + hacker1);

let hacker2 = "Bob";

console.log("The navigators name is" + hacker2);



// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has ' +  hacker1.length + ' characters.');
} else if(hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has '+ hacker2.length + ' characters.');
} else {
    console.log('Wow, you both have equally long names,' + hacker1.length + ' characters!');
}

// Iteration 3: Loops

let capital = hacker1.split('').join(' ').toUpperCase();

console.log(capital);

let reverse = hacker1.split('').reverse().join('');

console.log(reverse);

let alphabetical = hacker1.split('');




console.log(hacker1.localeCompare(hacker2));

if(hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus 1

let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat turpis ac convallis. Vivamus tortor velit, facilisis id augue a, bibendum dignissim odio. Nulla ultricies, est at porta facilisis, lectus lorem fringilla dui, non efficitur ipsum quam accumsan odio. Phasellus vel ante sem. Quisque nec scelerisque tortor. Sed id velit eget magna faucibus consequat. Maecenas a sapien tortor. Mauris lobortis est lorem, et malesuada ante tristique eu. Suspendisse commodo magna sit amet dui tempor accumsan. Nullam nulla arcu, molestie eu sem et, sodales condimentum massa. Nam vestibulum nibh diam, nec tempor lorem interdum in. Donec commodo finibus erat. Fusce vitae posuere dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent et luctus turpis. In at sodales lacus, vel porta risus. Donec aliquam gravida nibh vel vehicula. Suspendisse auctor felis vitae arcu tristique convallis. Proin posuere tempor odio, non porta nisi consectetur id. Nam egestas ligula risus, eget consectetur nulla fringilla non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ut porta turpis. Praesent finibus lorem quis velit suscipit, eu placerat leo aliquet. Vestibulum aliquam dapibus risus non tristique. Etiam sit amet mauris nec mi varius maximus sit amet nec libero. Mauris tincidunt bibendum metus quis pulvinar. Vestibulum vel bibendum ligula, eget scelerisque ipsum. Vestibulum ac odio sit amet diam lacinia aliquam eu ut ante. Quisque at euismod diam, non congue massa. Vivamus vestibulum, dolor non sagittis fermentum, lorem mi vehicula augue, eu rutrum neque velit ac sem. Nunc euismod nisi id nulla feugiat sollicitudin. Phasellus aliquet laoreet bibendum. Vestibulum vitae auctor leo. Pellentesque dolor massa, ultrices vel justo in, mattis tempus ex. Morbi dapibus semper magna, sit amet imperdiet sem auctor sit amet. Donec laoreet ornare urna, eget vehicula turpis ultrices id. Nam luctus eros turpis. Sed in ornare libero, eget convallis nisi. Nullam vel sollicitudin diam, quis viverra sem. In hac habitasse platea dictumst. Quisque volutpat maximus commodo. Vestibulum sodales placerat libero.";

const words = paragraphs.split(' ');

console.log(words.length);

let ocurrences = 0;

for(let i = 0; i < words.length; i++) {
    if(words[i] === "et") {
        ocurrences++;
    }
}

console.log('there was ' + ocurrences + ' ocurrences of the word et');


// Bonus 2



function palindrome(str) { 
    let newStr = str.replace(/\s/g, '');

    let mid = Math.floor(newStr.length/2);

    for(let i = 0; i < mid; i++) {
        if(newStr[i] !== newStr[newStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome("ava"));



