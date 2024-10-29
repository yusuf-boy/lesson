function outer() {
    let count = 0;
    return function() {
        count++;
        console.log(`Count: ${count}`);
    };
} 
export default {
    outer,
}