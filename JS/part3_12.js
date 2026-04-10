//다음 코드에서 || 대신 ??를 써야 하는 이유를 설명하고, 올바르게 수정하시오.

const score = 0;
const finalScore = score ?? 100;
console.log(finalScore);

// 0은 실제 값인데, ||는 이를 거짓으로 처리해 100을 선택합니다.