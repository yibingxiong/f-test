enum Response1 {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response1): void {
    console.log(recipient);
    console.log(message);
}

respond("Princess Caroline", Response1.Yes);



enum E {
    Foo,
    Bar,
}

function f(x: E) {
    if (x !== E.Foo) {
        console.log('1');
    }
}

f(E.Bar);