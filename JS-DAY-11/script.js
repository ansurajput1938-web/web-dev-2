//const textInput = document.getElementById("myInput");
//textInput.addEventListener("change", (event) => {
//   here event is targeting the entire element Object and event.target is targeting the value of the element Object
  //  event.preventDefault();
    //console.log(event.target.id);

//})

const form=document.getElementById("formInput")
const textInput=document.getElementById("myInput")
const courseInput=document.getElementById("course")
const output=document.getElementById("output")

form.addEventListener("submit",()=>{
    event.preventDefault();
    const name=textInput.value
    const course=courseInput.value
    console.log(name);
    
    // putt the name and course value inside the output box  

    output.innerText=name+ " "+ course
})