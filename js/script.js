let numberOfFilms;

function start () {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посомтрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ("Сколько фильмов вы уже посомтрели?", "");
    }
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function remeberMyfilms() {
    for (let i = 0; i < 2; i++) {
        let answer1 = prompt ("Один из последних просмотренныхфильмов?", "");
        let answer2 = prompt ("На сколько вы его оценили?", ""); 
    
        if (answer1 !=null && answer2 != null && answer1 != "" && answer2 !="" && answer1.length < 50) {
            personalMovieDB.movies[answer1] = answer2;
            console.log("DONE");
        } else {
            console.log("Error")
            i--;
        };
    };
};

remeberMyfilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log ("Просмотренно довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log ("Вы классический зритель!");
    } else if (personalMovieDB.count > 30) {
        console.log ("Вы киноман!");
    } else {
        console.log ("Error")
    };
};

detectPersonalLevel();

function showMeDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log(Error);
    };
};

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt (`Ваш любимый жанр под номером ${i} ?`, "");
        personalMovieDB.genres[i-1] = genre;
    };
};  

writeYouGenres();

showMeDB();






//const fruit = "Some fruit";
//console.log(fruit.indexOf("fruit"));

//const logg = "Hello world";
//console.log (logg.slice(6, 11)); //обрезать строку

//console.log (logg.substring(6, 11));

//console.log (logg.substr(6, 5)); // сколько  знаков вырезать

/*const num = 12.2;
console.log(Math.round(num)); // округление

const test = "12.2px";
console.log(parseInt(test)); //превратитьв другую систему исчисления и округляет

console.log(parseFloat(test)); // перевод строкив число*/

/*num = 50;
for (let i=1;i < 8; i++){
    if (i=== 6) {
        //break
        continue
    };
    console.log(i);
 };*/

/*let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
};*/

/*do {
    console.log(num);
    num++;
}
while (num <= 55);*/

//num = 49;
//(num === 50) ? console.log("Ок!") : console.log ("Error");
 
//let number =5.5;
//console.log('string' * 9);

//const persone = "Alex";

//const bool = false;

//console.log (something);

//let und;
//console.log(und);

/*const obj = {
    name: 'John',
    age: 25,
    isMarried: false,
};

console.log (obj.name);*/

/*const result = confirm ("Are you here?");
console.log (result);*/

//const answer = +prompt ("Dfv tcnm 18?", "18");
//console.log (typeof(answer));

//const answers = [];
//answers[0] = prompt ("Как ваше имя?", "");
//answers[1] = prompt ("Как ваше фамилия?", "");
//answers[2] = prompt ("Сколько вам лет?", "");

//document.write(answers);
