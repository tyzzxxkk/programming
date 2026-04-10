// 다음 객체에서 도시 이름을 안전하게 출력하시오. 오류가 나면 안 됩니다.

const user = {
  profile: null
};

console.log(user.profile?.address?.city); // 값이 null이나 undefined여도 오류를 내지 않고 반환