// if elseif else
function bigger(n1,n2,n3){
    if(n1>n2){
        return n1;
    }
    else if(n2>n1){
        return n2;
    }
    else{
        return n3;
    }
}
let n=bigger(18,39,6);
console.log('The bigger no is '+n);