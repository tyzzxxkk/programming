// 다음 코드의 출력 결과를 예측하고, 왜 그런지 설명하시오.

const original = [{ name: 'A' }, { name: 'B' }];
const copied = original.slice();

copied[0].name = 'Z';

console.log(original[0].name);
// slice()는 배열 자체는 새로 만들지만, 내부 객체는 같은 참조를 공유하는 얕은 복사이기 때문입니다.