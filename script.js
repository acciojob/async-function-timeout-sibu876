//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");


async  function call(){
	const delay = document.getElementById("delay").value;
  const text = document.getElementById("text").value;
    
	await new Promise((resolve) =>{
	     setTimeout(()=>{
			output.textContent = text;
			 resolve();
		},delay)
	})
	
}

btn.addEventListener('click',() =>{
		call();
	})
