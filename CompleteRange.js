// javascript
// utilizo Runjs para poder programar mas facil viendo los resultados en tiempo real sin tener que compilar

const example = [4, 6, 7, 9]; // 4,5,6,7,8,9

function build(numArray) {
  let num = numArray.reduce(function (acc, cur, ind, arr) {
    let diff = cur - arr[ind - 1];
    if (diff > 1) {
      let i = 1;
      while (i < diff) {
        acc.push(arr[ind - 1] + i);
        i++;
      }
    }
    const result = [...numArray, ...acc];
    const unicos = [...new Set(result)];
    return (total = unicos.sort());
  }, []);
  console.log(total);
}
build([55, 58, 60]);
build([4, 6, 7, 9]);
build([2, 4, 9]);
