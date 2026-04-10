// 다음 배열에서 하나라도 100점 이상인 값이 있는지 확인하시오.

const nums = [45, 60, 99, 88];

const result = nums.some(num => num >= 100); // 배열 요소 중에 하나라도 조건을 만족하는지
console.log(result); // false