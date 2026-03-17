// Genera un color aleatorio en HEX
function randomColor(){ 
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'); 
}

// Convierte HEX a HSL y devuelve objeto con h,s,l
function hexToHSL(hex){
  let r = parseInt(hex.slice(1,3),16)/255,
      g = parseInt(hex.slice(3,5),16)/255,
      b = parseInt(hex.slice(5,7),16)/255;
  let max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max+min)/2;
  if(max===min){ h=s=0; }
  else {
    let d = max-min;
    s = l>0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){
      case r: h=(g-b)/d+(g<b?6:0); break;
      case g: h=(b-r)/d+2; break;
      case b: h=(r-g)/d+4; break;
    }
    h*=60; 
  }
  return {h:Math.round(h), s:Math.round(s*100), l:Math.round(l*100)};
}

// Nombre básico según tono HSL
function colorName(h){ 
  if(h<30||h>=330) return "Rojo";
  if(h<90) return "Amarillo";
  if(h<150) return "Verde";
  if(h<210) return "Cian";
  if(h<270) return "Azul";
  return "Magenta";
}

// Genera la paleta1
function generate1(){
  const p=document.getElementById('palette1'); p.innerHTML='';
  for(let i=0;i<6;i++){
    const hex=randomColor();
    const hsl=hexToHSL(hex);
    const name=colorName(hsl.h);

    const box=document.createElement('div');
    box.className='box'; box.style.background=hex;

    const info=document.createElement('div');
    info.className='color-info';
    info.innerHTML=`${name}<br>${hex}<br>hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;

    const container=document.createElement('div');
    container.appendChild(box); container.appendChild(info);
    p.appendChild(container);
  }
}

// Genera la paleta2
function generate2(){
  const p=document.getElementById('palette2'); p.innerHTML='';
  for(let i=0;i<8;i++){
    const hex=randomColor();
    const hsl=hexToHSL(hex);
    const name=colorName(hsl.h);

    const box=document.createElement('div');
    box.className='box'; box.style.background=hex;

    const info=document.createElement('div');
    info.className='color-info';
    info.innerHTML=`${name}<br>${hex}<br>hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;

    const container=document.createElement('div');
    container.appendChild(box); container.appendChild(info);
    p.appendChild(container);
  }
}

// Genera la paleta3
function generate3(){
  const p=document.getElementById('palette3'); p.innerHTML='';
  for(let i=0;i<9;i++){
    const hex=randomColor();
    const hsl=hexToHSL(hex);
    const name=colorName(hsl.h);

    const box=document.createElement('div');
    box.className='box'; box.style.background=hex;

    const info=document.createElement('div');
    info.className='color-info';
    info.innerHTML=`${name}<br>${hex}<br>hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;

    const container=document.createElement('div');
    container.appendChild(box); container.appendChild(info);
    p.appendChild(container);
  }
}

