// 문제1. 제출한 학생들의 점수만 배열로 펼치고 평균 구하기
const classes = [
    [
      { name: '민수', submitted: true, scores: [80, 90] },
      { name: '지연', submitted: false, scores: [100, 70] }
    ],
    [
      { name: '도윤', submitted: true, scores: [85, 95] }
    ]
  ];
  
  const submittedScores = classes
  .flat() // 배열을 지정한 깊이만큼 펼치기
  .filter(student => student.submitted)
  .flatMap(student => student.scores); //배열을 펼치고 싶을 때 사용
  
  const average = submittedScores.reduce((acc, cur) => acc + cur, 0) / submittedScores.length // 배열을 하나의 값으로 축소
  
  console.log(submittedScores); // [80, 90, 85, 95]
  console.log(average);         // 87.5