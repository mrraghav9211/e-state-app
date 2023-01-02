import rent1 from './img/rent1.jpg'
import rent2 from './img/rent2.jpg'
import rent3 from './img/rent3.jpg'
import rent4 from './img/rent4.jpg'
import rent5 from './img/rent5.jpg'


export const stateData=[
    
    {
        name:"Dimand Hotel",
        location:"meerut",
        address:" 123 Begam pool meerut",
        price:20000,
        img:rent1,
        type:"hotel",
        bhk:3,
        bathroom:2
    },
    {
        name:"Palak Hotel",
        location:"meerut",
        address:" 123 Begam pool meerut",
        price:24000,
        img:rent2,
        type:"hotel",
        bhk:4,
        bathroom:2
    },
    {
        name:"Kamal Hotel",
        location:"meerut",
        address:" Near ccsu meerut",
        price:24000,
        img:rent5,
        type:"hotel",
        bhk:4,
        bathroom:2
    },
    {
        name:"Raghav House",
        location:"bulandshahr",
        address:"2030 Kala aam Choraha bsr",
        price:15000,
        img:rent3,
        type:"house",
        bhk:3,
        bathroom:2
    },
    {
        name:"Satvik House",
        location:"bulandshahr",
        address:"2030 Kala aam Choraha bsr",
        price:15000,
        img:rent4,
        type:"hotel",
        bhk:3,
        bathroom:2
    },
]
const arr=JSON.parse(localStorage.getItem("propData")) || [];
for(let i=0; i<arr.length; i++){
    stateData.push(arr[i]);
}
for(let i=0; i<stateData.length; i++){
    if(stateData[i].img === ""){
        stateData[i].img=rent5;
    }
}
// console.log(arr)