
let t=2;
let b=3;
let index=0;
let D=[1,2,3];
const arr=[];
for(i=0;i<t;i++){
arr[i]=[];
for(j=0;j<b;j++){
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