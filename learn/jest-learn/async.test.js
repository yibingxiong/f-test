beforeEach(() => {
    console.log('测试前都会走')
});

afterEach(() => {
    console.log('测试完了会走的')
});


function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter');
    }, 400);
}

test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 200);
    })
}
test('the data is peanut butter', () => {
    expect.assertions(1);
    return fetchDataPromise().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchDataPromise();
    expect(data).toBe('peanut butter');
});