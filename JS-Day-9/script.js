//Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph";
console.log(newParagraph);

//Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

//remove element 
//remove the first paragraph of container 
document.querySelector("#container p").remove();

const image = document.createElement("img");

image.setAttribute(src="https://krmangalam.edu.in/blog/the-magnificent-campus-life-at-krmu");
image.setAttribute("alt,K.R Mangalam");

const gallery = document.getElementById("gallery");
gallery.appendChild(image);
