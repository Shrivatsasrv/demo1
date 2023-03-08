// var num = window.prompt();
// var str = num.toString();
// var result = [str[0]];

// for (var x = 1; x < str.length; x++) {
//     if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
//         result.push('-', str[x]);
//     }
//     else {
//         result.push(str[x]);
//     }
// }
// console.log(result.join(''));

// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// var arr2 = [];
// var min = arr1[0];
// var pos;
// max = arr1[0];
// for (i = 0; i < arr1.length; i++) {
//     if (max < arr1[i]) max = arr1[i];
// }

// for (var i = 0; i < arr1.length; i++) {
//     for (var j = 0; j < arr1.length; j++) {
//         if (arr1[j] != "x") {
//             if (min > arr1[j]) {
//                 min = arr1[j];
//                 pos = j;
//             }
//         }
//     }
//     arr2[i] = min;
//     arr1[pos] = "x";
//     min = max;
// }
// console.log(arr2);

// function map(array) {
//     let resultArray = [];
//     array.forEach(element => {

//         resultArray.push(element);
//     })
//     return resultArray
// }

// const a = map([1, 2, 3, 4]);
// console.log(a);


// function main() {
//     let sum = 0;
//     let i = 10;
//     while (i < 1) {
//         sum = sum + i;
//         sum = sum * 2;
//         i -= 1;

//     }
//     console.log(sum);
// }
// main();


// function a(element, array) {
//     let result = -1;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             return i
//         }
//     }
//     return result
// }

// let b = a(3, [1, 2, 2, 4, 3]);
// console.log(b);

// function a(string) {
//     if (string.length <= 1) {
//         return string
//     }
//     let firstChar = string.charAt(0);
//     let lastChar = string.slice(1);
//     // return a(lastChars) + firstChar;
//     return lastChar + firstChar
// }
// console.log(a('helloworld'));

// let x = ['1', '2', '15', '-7', '300']
// let y = x.sort();
// console.log(y);

// function _(func, items) {
//     let i = 0;
//     for (let item of items) {
//         if (func(item)) {
//             items[i] = item;
//             i += 1
//         }
//     }
//     items.splice(1)
// }

// console.log(_);

// const f = n => n <= 1 ? 1 : n * f(n - 1);

// let g = f(4);
// console.log(g);

// function is_prime_number(num) {
//     let j = 9;
//     while (j * j <= num) {
//         if (num % j === 0) {
//             return false
//         }
//         j++
//     }
//     return true;
// }
// console.log(is_prime_number(6));

// function _(arr) {
//     let temp = 0;
//     for (const x of arr) {
//         if (x % 2 == 1) {
//             temp += 1
//         } else {
//             temp = 0
//         }
//         if (temp == 3) {
//             return true
//         }
//     }
//     return false
// }
// console.log(_([5, 4, 7, 23, 12]));

// console.log(Math.floor(-3.7));

// function f1(a) {
//     if (a === 0) return 1
//     return a * f1(a - 1)
// }
// function main() {
//     const f2 = (a, b) => Math.abs(2 * a - 3 * b)
//     console.log(f1(f2(2, 3)));
// }
// main(3, 6);

// function deleteBalnkItems(items) {
//     for (var i = 0; i < items.length; i++) {
//         if (items[i].length == 0) {
//             items.splice(i, 1);
//         }
//     }
//     console.log(items);
// }
// var names = ['rahel', '', 'meghana', '', '', 'tim'];
// deleteBalnkItems(names);
//ans -items=['rahel','meghana','','tim'];


function hasPosNeg(array) {
    let hasPos = false;
    let hasNeg = false;

    array.forEach(num => {
        hasPos = num > 0
        hasNeg = num < 0
    })
    return [hasPos, hasNeg]
}
console.log(hasPosNeg([]));
