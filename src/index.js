
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
   var new_array=[];
   if(matrix){
  for(i=0;i<matrix.length;i++){

    j_matrix=matrix[i];
     (i%2 == 0)? j_matrix: j_matrix.reverse();
    for(j=0;j<j_matrix.length;j++){ 
     
        new_array.push(matrix[i][j])
    }
  }
}
  return new_array;
}
