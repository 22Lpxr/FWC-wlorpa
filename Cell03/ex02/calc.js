setInterval(() => {
  alert('Please, use me...');
}, 30000);

function isValidPositiveInteger(value) {
  return /^\d+$/.test(value.trim());
}

document.getElementById('calc-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const leftStr  = document.getElementById('left').value;
  const rightStr = document.getElementById('right').value;
  const operator = document.getElementById('operator').value;

  if (!isValidPositiveInteger(leftStr) || !isValidPositiveInteger(rightStr)) {
    alert('Error :(');
    return;
  }

  const left  = parseInt(leftStr, 10);
  const right = parseInt(rightStr, 10);

  if ((operator === '/' || operator === '%') && right === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch (operator) {
    case '+': result = left + right; break;
    case '-': result = left - right; break;
    case '*': result = left * right; break;
    case '/': result = left / right; break;
    case '%': result = left % right; break;
  }

  console.log(`${left} ${operator} ${right} = ${result}`);
  alert(`${left} ${operator} ${right} = ${result}`);
});
