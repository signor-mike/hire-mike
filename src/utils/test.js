/* 
	jsut a file where I write different functions
	for an instant execution via 
	node test.js
*/

let date1 = "Mar 2014";
let date2 = "Nov 2011";
let date3 = "Sep 2021";
let date4 = "Feb 2012";
// sort these bitches
let arrayOfDates = [date1, date2, date3, date4];
function sortArrayOfDates(array) {
	return array.sort(function(a, b) {
		return new Date(b) - new Date(a);
	});
}

let reorder = sortArrayOfDates(arrayOfDates);
console.log(reorder);

// convert a string to a date
function convertStringToDate(string) {
	return new Date(string);
}
console.log(convertStringToDate(date1));

// weird stuff: works well in node, but doesn't work in firefox. Meh.
