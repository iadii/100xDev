
let num = 5; 

let string = "";

function str1(n) {
  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

      string += "*";
    }
    // newline after each row
    string += "\n";
  }

  console.log(string);
}
function str2(n) {
  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

      if (i === 0 || i === n - 1) {
        string += "*";
      } else {
        if (j === 0 || j === n - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    // newline after each row
    string += "\n";
  }

  console.log(string);
}
function str3(n) {
  for (let i = 1; i <= n; i++) {

    for (let j = 0; j < n - i; j++) {
      string += " ";
    }

    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
function str4(n) {

  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
str1(num);
str2(num);
str3(num);
str4(num)
