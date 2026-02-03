const task1 = document.getElementById("profile");
task1.style.backgroundColor="tomato";
task1.style.pading="15px";
task1.style.textAlign="center"

const task2 = document.getElementsByClassName("para")
console.log(task2);

for(let i=0;i<task2.length;i++){
    task2[i].style.color="purple"
    task2[i].style.fontSize="20px"
}
console.log(task2.length)

const task3 = document.querySelectorAll("#content p");
for(let i=0;i<task3.length;i++){
    task3[i].style.backgroundColor="cyan";
}
