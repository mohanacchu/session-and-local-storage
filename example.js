// set key value
let key = 'Item 1';
localStorage.setItem(key, 'Value');

// read value
let myItem = localStorage.getItem(key);

// update the value
localStorage.setItem(key, 'New Value');

// delete value
localStorage.removeItem(key);


// clear everything
localStorage.clear();