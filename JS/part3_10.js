// 다음 배열에서 `banana`를 제거하고 그 자리에 `grape`, `melon`을 삽입하시오.

const fruits = ['apple', 'banana', 'orange'];

fruits.splice(1, 1, 'grape', 'melon'); // 배열의 요소를 삭제하거나 끼워 넣거나 교체
console.log(fruits); // ['apple', 'grape', 'melon', 'orange']