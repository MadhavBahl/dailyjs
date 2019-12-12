/**
 * Given an of news headlines (take some random data), and enclose the headlines in `<h1>` tag and append them to DOM to display the news headlines
 */

const headlines = [
    "Wow, does that work?",
    "He ran out of money, so he had to stop playing poker",
    "Everyone was busy, so I went to the movie alone.",
    "It was getting dark, and we weren’t there yet.",
    "How was the math test?",
    "The mysterious diary records the voice",
];

// Random sentences generated from: https://randomwordgenerator.com/sentence.php

let domReadyHeadlines = headlines.map (headline => "<h1>" + headline + "</h1>");

console.log (domReadyHeadlines);