const solveButton = document.getElementById("solveBtn");
const answerEl = document.getElementById("answer");

solveButton.addEventListener("click", () => {
  console.clear();
  const x1 = Number(document.getElementById("x1").value);
  const y1 = Number(document.getElementById("y1").value);
  const c1 = Number(document.getElementById("c1").value);
  const x2 = Number(document.getElementById("x2").value);
  const y2 = Number(document.getElementById("y2").value);
  const c2 = Number(document.getElementById("c2").value);
  let eq1 =[x1,y1,c1];
  let eq2 =[x2,y2,c2];
  let divisor1 = eq1[0];

  console.log("---------------");
  console.log(eq1);
  console.log(eq2);
  for (let i =0; i<eq1.length;i++){
    eq1[i]=eq1[i]/divisor1
  };
  console.log("1---------------");
  console.log(eq1);
  console.log(eq2);
  let multiply1 = eq2[0];

  for (let i=0;i<eq2.length;i++){
    eq2[i] = eq2[i] - multiply1 * eq1[i];
  }
  console.log("2---------------");
  console.log(eq1);
  console.log(eq2);

  let multiply2= eq2[1]

  for (let i=0; i<eq2.length;i++){
    eq2[i] = eq2[i] / multiply2;
  };

  console.log("3---------------");
  console.log(eq1);
  console.log(eq2);

  let multiply3 = eq1[1]

   for (let i=0; i<eq1.length;i++){
    eq1[i] = eq1[i] -(multiply3*eq2[i])
  };

  console.log("4---------------");
  console.log(eq1);
  console.log(eq2);

  eq1 = eq1.map((v) => Number(v.toFixed(6)));
  eq2 = eq2.map((v) => Number(v.toFixed(6)));
  
  console.log("5---------------");
  console.log(eq1);
  console.log(eq2);

  answerEl.textContent = `x = ${eq1[2]}, y = ${eq2[2]}`;
});
