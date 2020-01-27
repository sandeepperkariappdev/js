var x = [
  {
    id: 1,
    name: "bill"
  },
  {
    id: 2,
    name: "ted"
  },
  {
    id: 3,
    name: "gill"
  },
  {
    id: 4,
    name: "ged"
  },
  {
    id: 5,
    name: "kill"
  },
  {
    id: 6,
    name: "red"
  }
];

let y = x.reduce((prev, cv, index, item, a) => {
  console.log(prev);

  prev.push(cv);
  return prev;
}, []);

var test = [
  {
    id: 1,
    PlaceRef: "*00011",
    Component: "BATH",
    SubLocCode: "BAT",
    BarCode: ""
  },
  {
    id: 2,
    PlaceRef: "*00022",
    Component: "BAXI10R",
    SubLocCode: "KIT",
    BarCode: ""
  },
  {
    id: 1,
    PlaceRef: "*00011",
    Component: "BATH",
    SubLocCode: "BAT",
    BarCode: ""
  },
  {
    id: 3,
    PlaceRef: "*00011",
    Component: "ANR190",
    SubLocCode: "B1",
    BarCode: ""
  }
];
var uniq = test.filter(function({ id }) {
  return !this[id] && (this[id] = id);
}, {});
//console.log(uniq);

//1) merge the following dataset and display the unique combination of name, place, age
// arr1 => [{name: "bhavya", age: "30"}, {name: "daivik", age: "20"}, {name: "bhavya", age: "20"}, {name: "debbie", age: "35"}, {name: "Ann", age: "25"}]
// arr2 => [{name: "debbie", place: "FL"}, {name: "daivik", place: "NJ"}, {name: "Gnan", place: "NJ"}, {name: "bhavya", place: "CA"}]
// output => // arr1 => [{name: "bhavya", age: "30", place: "CA"}, {name: "daivik", age: "20", place: "NJ"}, {name: "Gnan", age: null, place: "NJ"}, {name: "debbie", age: "35", place:"FL"}, {name: "Ann", age: "25", place: null}]
//2) to display name, age, place in different font sizes on each button click.
//font sizes should be random on each click and should not be repeated with the previous or next size.
// font sizes input: [2,6,10,14,1,8]

let arr1 = [
  { name: "bhavya", age: "30" },
  { name: "daivik", age: "20" },
  { name: "bhavya", age: "20" },
  { name: "debbie", age: "35" },
  { name: "Ann", age: "25" }
];
let arr2 = [
  { name: "debbie", place: "FL" },
  { name: "daivik", place: "NJ" },
  { name: "Gnan", place: "NJ" },
  { name: "bhavya", place: "CA" }
];

let arr3 = arr1.concat(arr2);

let arr4 = arr3.reduce((prev, cv, i, ar) => {
  let af = ar.filter(tm => tm.name === cv.name);
  let pv = prev.filter(tm => tm.name === cv.name);
  if (pv.length === 0) {
    prev.push(af.length > 1 ? Object.assign({}, ...af) : cv);
  }
  return prev;
}, []);

console.log(arr4);
