

const button = document.createElement("button");

button.setAttribute("onclick", "changeColor()");
button.innerHTML = "Change Color!"
button.style.margin = '0 auto';


document.body.append(button)






function getRandomColor(){
	
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
	color += letters[Math.floor(Math.random() * 16)];
  }
	
  return color;
	
}

function changeColor(){
  let newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
}