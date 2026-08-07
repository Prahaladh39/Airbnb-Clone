function dothing(a, b, c) {
    var x = a + b;
    var y = c - x;
    var z = y * 2;
    // do some stuff
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(z > 0) {
                resolve(z);
            } else {
                reject("error");
            }
        }, 1000);
    });
}
