/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* 
	jsut a file where I write different functions
	for an instant execution via 
	node test.js
*/

let mystr =
	"After working for several years among Customer Service Assistance and then in Sales Management, famous events happened in my birthplace brought me away and took me to change my personal priorities. I traveled around Europe, Volunteering in a Hostel in Tenerife where I became Hospitality Assistant Manager and it was one of the most incredible experience of my life. Finally able to settle in Italy, I decided to try to be accepted in a Highly Selective, Intensive program to effectively learn topics I was working with previously in my life as self-taught, and finally turn myself into a professional Web Developer";

const formatter = (str) => {
	let formattedStr = str.replaceAll(".", ".\n");
	return formattedStr;
};

console.log(formatter(mystr));
// \n
// Add %0D%0A to any place you want to encode a line break on the URL

let arr = {
	foo: { some: "thing" },
	bar: {},
	anotherFoo: {},
	anotherBar: {},
};
console.log(arr["foo"].some);
