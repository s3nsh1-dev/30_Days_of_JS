/*
Exercise: Level 1
1.	Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
2.	Print the string on the browser console using console.log()
3.	Print the length of the string on the browser console using console.log()
4.	Change all the string characters to capital letters using toUpperCase() method
5.	Change all the string characters to lowercase letters using toLowerCase() method
6.	Cut (slice) out the first word of the string using substr() or substring() method
7.	Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
8.	Check if the string contains a word Script using includes() method
9.	Split the string into an array using split() method
10.	Split the string 30 Days Of JavaScript at the space using split() method
11.	'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12.	Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13.	What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14.	What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
15.	Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16.	Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17.	Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
18.	Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
19.	Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
20.	Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21.	Use startsWith() method with the string 30 Days Of JavaScript and make the result true
22.	Use endsWith() method with the string 30 Days Of JavaScript and make the result true
23.	Use match() method to find all the a’s in 30 Days Of JavaScript
24.	Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25.	Use repeat() method to print 30 Days Of JavaScript 2 times

===========================================================================================================

Exercise: Level 2
1.	Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
2.	Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
3.	Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4.	Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5.	Check if 'on' is found in both python and jargon
6.	I hope this course is not full of jargon. Check if jargon is in the sentence.
7.	Generate a random number between 0 and 100 inclusively.
8.	Generate a random number between 50 and 100 inclusively.
9.	Generate a random number between 0 and 255 inclusively.
10.	Access the 'JavaScript' string characters using a random number.
11.	Use console.log() and escape characters to print the following pattern
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
12.	Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

===========================================================================================================

Exercises: Level 3
1.	'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
2.	Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
3.	Clean the following text and find the most frequent word (hint, use replace and regular expressions). 
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
4.	Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

 */

// Answers:

let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
let UpperCaseChallenge = challenge.toUpperCase();
let LowerCaseChallenge = challenge.toLowerCase();
let FirstChar = challenge.substring(0, 1);
let SecondCharSlice = challenge.slice(3);
let CheckWord = challenge.includes("Script");
const ChallengeArray = challenge.split(" ");
let GivenNames = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const GivenNamesArray = GivenNames.split(",");
let ChallengeNameReplace = challenge.replace("JavaScript", "Python");
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let GivenSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(GivenSentence.indexOf("because"));
console.log(GivenSentence.lastIndexOf("because"));
console.log(GivenSentence.search("because"));
let WhiteTrails = " 30 Days Of JavaScript ";
console.log(WhiteTrails.trim());
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/g));
let MergingStringPart1 = "30 Days of";
let MergingStringPart2 = " JavaScript";
let FinalMerge = MergingStringPart1.concat(MergingStringPart2);
console.log(challenge.repeat(2));
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
console.log(typeof "10" == typeof 10);
console.log(parseFloat("9.8") == 10);
let OldParseNumber = "9.8";
let NewNumberFromParse = Math.ceil(OldParseNumber);
console.log(NewNumberFromParse);
console.log(
  "jargon".includes("on") ? ("pyhton".includes("on") ? true : false) : false
);
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.floor(Math.random() * 100));
console.log(50 + Math.floor(Math.random() * 50));
console.log(Math.floor(Math.random() * 255));
console.log(
  "JavaScript".charAt(Math.floor(Math.random() * "Javascript".length))
);
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");
let TakingBcozOut = GivenSentence.substr(31, 23);
console.log(TakingBcozOut);
let FindingLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(FindingLove.match(/love/gi).length);
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";
const FilteredSentence = sentence.replace(/[%@&$#;!?]/g, "");
const IncomeText =
  "Hiei earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const IncomeArray = IncomeText.match(/\d+/g);
const AnnualIncome =
  parseInt(IncomeArray[0] * 12) +
  parseInt(IncomeArray[1]) +
  parseInt(IncomeArray[2] * 12);
console.log(AnnualIncome);
