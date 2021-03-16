console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

const isFull = () => {
  if (basket.length<5){
    return false
  } return true
}

const addItem = item =>{
  if (isFull()) {
    return false;
  }
  basket.push(item);
  return true;
}

const listItems = () => {
  for (item of basket) {
    console.log(item);
  }
}

const removeItem = item => {
  if (basket.indexOf(item) === -1){
    return null;
  }
  return basket.splice(basket.indexOf(item),1);
}

const empty = () => basket = [];

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Adding spinach (expect true)', addItem('spinach'));
console.log('Adding eggs (expect true)', addItem('eggs'));
console.log('Adding flour (expect false)', addItem('flour'));
console.log(`Basket is now ${basket}`);

console.log('Listing items:',);
listItems();

console.log('Removing oranges (expect oranges)', removeItem('oranges'));
console.log('Removing oranges (expect null)', removeItem('oranges'));
console.log('Listing items:',);
listItems();



console.log('Emptying basket.');
empty();
console.log('Listing items, basket should now be empty:');
listItems();
