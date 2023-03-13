

document.getElementById('button-addon5').addEventListener('click',function () {

    let inputNames=document.getElementById('username');
    let inputEmail=document.getElementById('Email');
    let inputMessage=document.getElementById('massage');
let name=inputNames.value;
let mail=inputEmail.value;
let messg=inputMessage.value;

let parson={name,mail,messg}
const existingData = JSON.parse(localStorage.getItem('parson')) || [];
existingData.push(parson);
localStorage.setItem('parson', JSON.stringify(existingData));
inputNames.value=''
inputEmail.value=''
inputMessage.value=''

showalldataintheTable(name,mail,messg)
})


document.getElementById('button-addon6').addEventListener('click',function () {
alert('deleeeee')
localStorage.clear() 


})


let showalldataintheTable=()=>{

let tbody=document.getElementById('tbody');
let th=document.getElementById('thead');
tbody.innerHTML=''
const data = JSON.parse(localStorage.getItem('parson'));
if (data === null) {
    th.classList.add('d-none')
   alert('no data found')
   return
}
else{
    th.classList.remove('d-none')
data.forEach(person => {
   
tbody.innerHTML +=`
<tr>
<th scope="row">${person.name}</th>
            <td >${person.mail}</td>
            <td>${person.messg.length > 50 ?  person.messg.slice(0,50)+`...` : person.messg }</td>
            </tr>

`
});
    
}









}


showalldataintheTable()


