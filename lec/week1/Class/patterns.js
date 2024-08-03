const pattern1 = (n) => {
    for (let i = 1; i  < n; i++) {
      let row = ''
        for (let j = 0; j < n; j++) {
            row += "* "
        }
        console.log(row)
    }
}

const pattern2 = (n) => {
  for (let i = 1; i  < n; i++) {
    let row = ''
    for (let j = 0; j < i; j++) {
      row += "* "
    }
    console.log(row)
  }
}
pattern1(5)
pattern2(5)


const pattern3 = (n) => {
  for (let i = 1; i  <= n; i++) {
    let row = ''
    for (let j = 0; j < i*2; j++) {
//      row += "* "
      row += i
    }
    console.log(row)
  }
}
pattern3(5)

function drawPyramid(height) {
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < height - i - 1; j++) {
      row += ' '; 
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += '*'; 
    }
    console.log(row);
  }
}

drawPyramid(5);
