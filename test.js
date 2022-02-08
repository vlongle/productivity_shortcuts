"use strict";

function merge(arrA, arrB) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            result.push(arrA[i]);
            i++;
        } else {
            result.push(arrB[j]);
            j++;
        }
    }
    while (i < arrA.length) {
        result.push(arrA[i]);
        i++;
    }
    while (j < arrB.length) {
        result.push(arrB[j]);
        j++;
    }
    return result;
}

function mergeSort(arr) {
    // base case
    if (arr.length <= 1) {
        return arr;
    }

    // recursive case
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}


function shuffle(arr) {
    let result = [];
    while (arr.length > 0) {
        let index = Math.floor(Math.random() * arr.length);
        result.push(arr[index]);
        arr.splice(index, 1);
    }
    return result;
}


let arr = [2, 4, 6, 8, 1, 3, 5, 7];
console.log(arr);
arr = shuffle(arr);
console.log(arr);
console.log(mergeSort(arr));

