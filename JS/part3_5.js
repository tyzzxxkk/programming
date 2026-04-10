// 다음 배열에서 `id`가 203인 사용자의 인덱스를 구하시오.


const users = [
  { id: 201, name: 'A' },
  { id: 202, name: 'B' },
  { id: 203, name: 'C' }
];

const result = users.findIndex(users => users.id == 203); // 조건에 맞는 첫번째 요소의 인덱스를 반환
console.log(result);