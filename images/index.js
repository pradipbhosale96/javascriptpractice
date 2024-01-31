const isDOBOpen = false;
const settingscogEl= document.getElementById("settingIcon");
const settingcontenEl= document.getElementById("settingContent");


const toggleDateOfBirthSelector =()=>{
    if(isDOBOpen){
        settingcontenEl.classList.add("hide");

    }
    else{
        settingcontenEl.classList.remove("hide")
    }
    isDOBOpen=!isDOBOpen;
    
    console.log("Toggle,isDOBOpen")
}
settingscogEl.addEventListener('click',toggleDateOfBirthSelector);