

function array(N,M,index,D){
for(i=0;i<N;i++){
arr[i]=[];
for(j=0;j<M;j++){
    if(index<D.length){
        arr[i][j]=D[index];
        index++;
      }else{
         index=0
         arr[i][j]=D[index];
         index++;


        }
    }
}

console.log(arr);
}
let N=4;
let M=5;
let index=0;
let D=[7,5,8];
const arr=[];
array(N,M,index,D);