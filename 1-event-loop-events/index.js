console.log('Program start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);
setTimeout(() => {
    console.log('Timeout 2');
}, 10);

Promise.resolve().then(() => {
    console.log('Promis 1');
});

console.log('Program end');
console.log(arguments.callee.toString());
