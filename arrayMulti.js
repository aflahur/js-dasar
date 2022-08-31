let matrix = [[1, 2, 3], [2, 2, 3]]
console.log(matrix);
console.log(matrix.length);
console.log(matrix[0].length);

matrix.push([1, 1, 1]);
console.log(matrix);

matrix.pop();
console.log(matrix);

matrix[0].pop();//menghapus angka terakhir di index 0
console.log(matrix);