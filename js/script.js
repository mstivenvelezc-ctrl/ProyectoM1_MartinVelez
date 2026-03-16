function randomColor(){ 
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'); 
}

function generate1(){
  const p = document.getElementById('palette1'); 
  p.innerHTML = '';
  for(let i=0; i<3; i++){
    const c = randomColor();
    const b = document.createElement('div');
    b.className = 'box'; 
    b.style.background = c;
    p.appendChild(b);
  }
}
window.onload = generate;


function randomColor(){ 
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'); 
}

function generate2(){
  const p = document.getElementById('palette2'); 
  p.innerHTML = '';
  for(let i=0; i<6; i++){
    const c = randomColor();
    const b = document.createElement('div');
    b.className = 'box'; 
    b.style.background = c;
    p.appendChild(b);
  }
}
window.onload = generate;

function randomColor(){ 
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'); 
}

function generate3(){
  const p = document.getElementById('palette3'); 
  p.innerHTML = '';
  for(let i=0; i<9; i++){
    const c = randomColor();
    const b = document.createElement('div');
    b.className = 'box'; 
    b.style.background = c;
    p.appendChild(b);
  }
}
window.onload = generate;