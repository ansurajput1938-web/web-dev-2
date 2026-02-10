//function handleClick(){
  //  document.getElementById("btn").
    //textContent="Clicked"
//}

function handleClick(){
    const head= document.querySelector("h1");
    head.style.color="tomato"
    head.textContent="New Heading"
}    

function handleClick(){
    const spanEle=document.createElement("span").textContent="This is span element"

    const image = document.createElement("img")

    image.setAttribute("src", "https://krmangalam.edu.in/_next/image?url=https%3A%2F%2Fwww.krmangalam.edu.in%2Fwp-content%2Fuploads%2F2024%2F02%2F82bs_1-768x380-1.webp&w=1920&q=75");

    image.setAttribute("alt","K.R. Mangalam University");

    document.getElementById("content").append(spanEle)
    document.getElementById("content").append(image)
}
    
