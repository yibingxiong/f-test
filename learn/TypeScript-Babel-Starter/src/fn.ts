function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number { return x + y; };
console.log(add(1, 1));
console.log(myAdd(1, 2));

let myAdd2: (x: number, y: number) => number =
    function (x: number, y: number): number { return x + y; };

console.log(myAdd2(1, 3));


function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

console.log(result3);


function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName2("Bob");  // works correctly now
// let result2 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName2("Bob", "Adams");  // ah, just right

console.log(result1);
console.log(result3);



function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result5 = buildName3("Bob");                  // works correctly now, returns "Bob Smith"
let result6 = buildName3("Bob", undefined);       // still works, also returns "Bob Smith"
// let result7 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
let result8 = buildName3("Bob", "Adams");         // ah, just right

function buildName4(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

console.log('frist name', 'a', 'b', 'c');



let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

let pickedCard3 = pickCard([{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }]);

console.log(pickedCard3);