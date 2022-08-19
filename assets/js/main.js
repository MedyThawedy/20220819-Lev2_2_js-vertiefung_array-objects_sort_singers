const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

/* https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/ */

singers.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

let index = 0;

let sortedSingers = {};

singers.forEach((e) => {
    index = index + 1;
    console.log(index + ': ' + 'Object { name:' + e.name + ', country: ' + e.country + ', genre: ' + e.genre + 'period_active: ' + e.period_active);
    sortedSingers[index] = { name: e.name, country: e.country, genre: e.genre, period_active: e.period_active };
});


function fnShowResult() {
    document.write('<br>');
    document.write('<h2> Sorted object = </h2>');
    document.write('<br>');
    for (let i = 0; i < singers.length; i++) {
        document.write(i + ': ' + 'Object { name:' + singers[i].name + ', country: ' + singers[i].country + ', genre: ' + singers[i].genre + 'period_active: ' + singers[i].period_active + '<br>');
    }
}


console.log(sortedSingers);
