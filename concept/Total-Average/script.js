// total,Average
let m1=parseInt(prompt('Enter m1')),m2=parseInt(prompt('Enter m2')),m3=parseInt(prompt('Enter m3')),m4=parseInt(prompt('Enter m4')),m5=parseInt(prompt('Enter m5')),val,avg;

function total(m1,m2,m3,m4,m5){
    return val=m1+m2+m3+m4+m5;
}
val=total(m1,m2,m3,m4,m5);
console.log('The total value is '+val);

function average(val){
    return avg=val/5;
}
avg=average(val);
console.log('The average value is '+avg);