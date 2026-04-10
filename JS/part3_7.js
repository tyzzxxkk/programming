// 다음 문자열 배열을 공백 기준으로 쪼개고, 최종 결과를 하나의 배열로 만드시오.

const lines = ['red blue', 'green yellow', 'black white'];

const result = lines.flatMap(lines => lines.split(''));
console.log(result);