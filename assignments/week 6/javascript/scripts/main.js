var oneValue = 800;

oneValue = 500;

// An JavaScript Array is described using the square brackets symbols, and each value within should be split by a comma except for the last value.
var days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

var randomArray = [100, "hello", true];

var multiDimensionalArray = [
    [10, 20],
    [100, 200]
];

//var newArray = randomArray + days;
var newArray2 = randomArray.concat(days);

console.log(days[3]);
console.log(days[600]);

days[2] = "whensday";

console.log(days);


function addArrays(array1, array2) {

    var newArray = [
        array1[0] + array2[0],
        array1[1] + array2[1]
    ]

    return newArray;
}

var firstArray = [1, 10];
var secondArray = [9, 90];
var sumArray = addArrays(firstArray, secondArray);

console.log(sumArray);

days[7] = "superday";

console.log(days);

// Array Functions
// .push() puts a neew piece a data at the end of the array. example: myArray.push("last item!");
// .pop() removes the last piece of data in the array (and returns it to wherever you called .pop())example: MimeTypeArray.prototype()

// .unshift() puts a new piece of data at the beginning of the array. example myArray.unshift("cutting the line!");
// .shift() removes the first piece of data in the array ()

var multiples = [];
var multiplier = 12;

for (var i = 0; i < 12; i = i + 1) {

    var product = i * multlipier;
    multiples.push(product);
}

multiples.shift();

console.log(multiples);