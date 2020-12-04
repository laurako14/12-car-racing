const car1 = document.querySelector('.car-1');
const car2 = document.querySelector('.car-2');

let car1Position = 0;
let car2Position = 0;

// car1Position += 100;
// car2Position += 200;

// car1.style.left = car1Position + 'px';
// car2.style.left = car2Position + 'px';

// addEventListener('keyPress');
// addEventListener('keyDown');
// addEventListener('keyUp');

addEventListener('keyUp', (event) => { // jei vienas eventas, galima be skliausteliu
    const key = event.key;

    if (key === 'w') {
        car1Position += 10;
        car1.style.left = car1Position + 'px';
    }

    if (key === 'p') {
        car2Position += 10;
        car2.style.left = car2Position + 'px';
    }
})

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixArr = [3, 2, 4, 6, 7, 8, 1, 9, 5];


// function findDeletedNumber(arr, mixArr) {
//   const ordered = mixArr.sort(function(a, b) {return a - b});
//   console.log(ordered);
    
// }

// findDeletedNumber();

