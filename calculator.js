
function add(a, b) {
    return a + b;
  }

function sub(a, b) {
    return a - b;
}


//node exports the functions so we can use them in the tests
module.exports = {
    add: add,
    sub: sub,

}