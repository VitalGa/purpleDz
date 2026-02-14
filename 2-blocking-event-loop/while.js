let isRunning = true;

setTimeout(() => {
    isRunning = false;
}, 100);

ProcessingInstruction.nextTick(() => {
    console.log('Next tick is running...');
});

while (isRunning) {
    console.log('While loop is running...');
}
