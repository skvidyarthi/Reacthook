1.instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
2. hasownPropery check id object has property or not
3.Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
4.There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! 
5.All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
6.A mixin allows other objects to use a collection of functions.

Functional Programming....

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

3. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

3. Refine book list:

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (list,bookName) {
return [...list, bookName];
  
  // Change code above this line
}

// Change code below this line
function remove (list,bookName) {
 return list.filter(book=>book!=bookName);
    // Change code above this line
 }


var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/// snipeets:

function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

// map function 

1.const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
2.const ratings = watchList.map(item => ({
  title: item.Title,
  rating: item.imdbRating
}));


map function in Array:

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;

};

// map and filter
var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
  });
  
  
 // filter generic code with out filter keywork
 Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  for(let i=0; i<this.length; i++){
    if(callback(this[i])===true){
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;

};


//reduced 7 filter & mapfunction getRating(watchList){
  // Add your code below this line
  var averageRating =
  watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
}


/// alphabetical order:

function alphabeticalOrder(arr) {
  // Only change code below this line
return arr.sort(function(a,b){

return a===b ? -1:a<b ? -1:1

});

  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// reverse order
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);