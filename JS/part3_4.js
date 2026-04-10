// 다음 배열에서 점수가 90점 이상인 **첫 번째 학생 객체**를 구하시오.


const students = [
  { name: '민수', score: 70 },
  { name: '지연', score: 95 },
  { name: '도윤', score: 91 }
];

const result = students.find(student => student.score >= 90);
console.log(result);