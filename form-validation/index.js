const submitBtn =document.getElementById('submitBtn');
const nameError =document.getElementById('nameError');

submitBtn.addEventListener(click,(e)=>{
    e.preventDefault();

    if(validateName()){
        alert("Form is Submited Successfully!")
    }

});
function validateName(){
    let name=document.getElementsById('name').value;
    if(name.length==0){
        nameError.innerHTML="Name is Required!"
        return false;
    }
    return true;
}