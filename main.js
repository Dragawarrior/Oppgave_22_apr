console.log(20+10);

const imageElement = document.getElementById('capsChibi')
const dark1 = '/assets/caps1.PNG';
const medium1 = '/assets/caps1Medium.png';
const light1 = '/assets/caps1Light.png';
const selectCapsChibi = document.getElementById ('selectCapsChibi');

console.log(selectCapsChibi);

const selectElement = document.querySelector('#selectCapsChibi')
const selectedValue = selectElement.value;
console.log(selectedValue)

addEventListener("change", (event)=>{
    console.log(event.target.value);
    if(event.target.value == 'dark1'){
        console.log('This is the dark version')
        imageElement.src = dark1;
    } else if(event.target.value == 'medium1'){
        console.log('This is the medium version')
        imageElement.src = medium1;
    } else if(event.target.value == 'light1'){
        console.log('This is the light version')
        imageElement.src = light1;
    } else {
        console.log('What the hell did you do?!')
    }
});

console.log(20+20)

const imageElement2 = document.getElementById('capsNagi')
const dark2 = '/assets/caps2.PNG';
const medium2 = '/assets/caps2Medium.png';
const light2 = '/assets/caps2Light.png';
const selectCapsNagi = document.getElementById('selectCapsNagi');

console.log(selectCapsNagi);

const selectElement2 = document.querySelector('#selectCapsNagi')
const selectedValue2 = selectElement2.value;
console.log(selectedValue2)

addEventListener("change", (event)=>{
    console.log(event.target.value);
    if(event.target.value == 'dark2'){
        console.log('This is the dark version')
        imageElement2.src = dark2;
    } else if(event.target.value == 'medium2'){
        console.log('This is the medium version')
        imageElement2.src = medium2;
    } else if(event.target.value == 'light2'){
        console.log('This is the light version')
        imageElement2.src = light2;
    } else {
        console.log('What the hell did you do?!')
    }
});