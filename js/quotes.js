const quotes = [
{
    quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author:"Mother Teresa",
},
{
    quote:"When you reach the end of your rope, tie a knot in it and hang on",
    author:"Franklin D. Roosevelt",
},
{
    quote:"Always remember that you are absolutely unique. Just like everyone else.",
    author:"Margaret Mead",
},
{
    quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author:"Robert Louis Stevenson",
},
{
    quote:"The future belongs to those who believe in the beauty of their dreams",
    author:"Eleanor Roosevelt",
},
{
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author:"Benjamin Franklin",
},
{
    quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author:"Helen Keller",
},
{
    quote:"It is during our darkest moments that we must focus to see the light.",
    author:"Aristotle",
},
{
    quote:"Whoever is happy will make others happy too.",
    author:"Anne Frank",
},
{
    quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author:"Ralph Waldo Emerson",
},
{
    quote:"You will face many defeats in life, but never let yourself be defeated.",
    author:"Maya Angelou",
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Mandela",
},
{
    quote:"In the end, it's not the years in your life that count. It's the life in your years.",
    author:"Abraham Lincoln",
},
{
    quote:"Never let the fear of striking out keep you from playing the game.",
    author:"Babe Ruth",
},
{
    quote:"Life is either a daring adventure or nothing at all.",
    author:"Helen Keller",
},
{
    quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison",
},
{
    quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author:"Dr. Seuss",
},
{
    quote:"If life were predictable it would cease to be life and be without flavor.",
    author:"Eleanor Roosevelt",
},
{
    quote:"Life is what happens when you're busy making other plans.",
    author:"John Lennon",
},

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote();

function todaysQuote(){
    const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuotes.quote;
    author.innerText = todaysQuotes.author;
}

