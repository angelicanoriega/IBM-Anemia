const seeFirst = document.getElementById('fisrt');
const seeSecond = document.getElementById('second');
const seeThird = document.getElementById('third');
const seeEyes = document.getElementById('eyes');
const seeNotEyes = document.getElementById('not-eyes');
const btnReturn = document.getElementById('return-img');
const btnReturnFrom = document.getElementById('return-from');
const btnCamera = document.getElementById('btn-camera');
const btnForm = document.getElementById('btn-form');
const btnYes = document.getElementById('yes');
const btnNot = document.getElementById('not');

// variables de preguntas
const questionOne=document.getElementById('Q1');
const questiontwo=document.getElementById('Q2');
const questionthree=document.getElementById('Q3');
const questionfour=document.getElementById('Q4');
const questionfive=document.getElementById('Q5');
const questionsix=document.getElementById('Q6');
const questionseven=document.getElementById('Q7');


window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('video');
    const localStream = null;
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const errBack = (e) => {
        console.log('Opps.. no se puede utilizar la cámara', e);
    };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream) => {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    } else if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia({
            video: true
        }, (stream) => {
            video.src = stream;
            video.play();
            localStream = stream;
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia({
            video: true
        }, (stream) => {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            localStream = stream;
        }, errBack);
    } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia({
            video: true
        }, (stream) => {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            localStream = stream;
        }, errBack);
    }
    document.getElementById('tomar').addEventListener('click', () => {
        context.drawImage(video, 0, 0, 250, 300);
    });
}, false);
// visualizacion de secciones
btnCamera.addEventListener('click', () => {
    seeFirst.setAttribute('class', 'hidden');
    seeSecond.removeAttribute('class');
})
btnReturn.addEventListener('click', () => {
    seeSecond.setAttribute('class', 'hidden');
    seeFirst.removeAttribute('class');
})
btnForm.addEventListener('click', () => {
    seeThird.removeAttribute('class');
    seeFirst.setAttribute('class', 'hidden');
})
btnReturnFrom.addEventListener('click', () => {
    seeThird.setAttribute('class', 'hidden');
    seeFirst.removeAttribute('class');
})
btnYes.addEventListener('click', () => {
    if(seeEyes.hasAttribute('class')){
        seeEyes.removeAttribute('class');
        seeNotEyes.setAttribute('class', 'hidden');
    }
    else{
        seeEyes.setAttribute('class', 'hidden');
    }
})
btnNot.addEventListener('click', () => {
    if(seeNotEyes.hasAttribute('class')){
        seeNotEyes.removeAttribute('class');
        seeEyes.setAttribute('class', 'hidden');
    }
    else{
        seeNotEyes.setAttribute('class', 'hidden');
    }
})
// 