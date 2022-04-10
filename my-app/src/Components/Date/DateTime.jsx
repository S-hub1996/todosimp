import React from 'react'


 const DateTime=()=>{

const showDate = new Date();
const month = showDate.getMonth()+1;
// const month1=
const displayTodaysDate= `${showDate.getUTCDate()+' '+month+' '+showDate.getFullYear()}`;
// console.log(displayTodaysDate)
console.log(month)
return <>
<div>
    <h3 type="text"   >{displayTodaysDate}</h3>
</div>
</>

}
export default DateTime;