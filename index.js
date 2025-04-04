

function timing(){
const timer=document.getElementById("first");
const now= new Date()
const local_time = now.toLocaleTimeString();
timer.innerHTML=local_time;
}

setInterval(timing , 1000);
const timer=document.getElementById("first");

timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.backgroundColor="black";
timer.style.color="white";
timer.style.height="100vh";
timer.style.fontSize="50px";


