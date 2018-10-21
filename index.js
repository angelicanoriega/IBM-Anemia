const seeFirst = document.getElementById('fisrt');
const seeSecond = document.getElementById('second');
const seeThird = document.getElementById('third');
const seeEyes = document.getElementById('eyes');
const seeNotEyes = document.getElementById('not-eyes');
const seeEvaluate = document.getElementById('evaluate');
const btnReturn = document.getElementById('return-img');
const btnReturnFrom = document.getElementById('return-from');
const btnCamera = document.getElementById('btn-camera');
const btnForm = document.getElementById('btn-form');
const btnYes = document.getElementById('yes');
const btnNot = document.getElementById('not');
// variables de preguntas
const questionOne=parseInt(document.getElementById('Q1').value);
const questiontwo=parseInt(document.getElementById('Q2').value);
const questionthree=parseInt(document.getElementById('Q3').value);
const questionfour=parseInt(document.getElementById('Q4').value);
const questionfive=parseInt(document.getElementById('Q5').value);
const questionsix=parseInt(document.getElementById('Q6').value);
const questionseven=parseInt(document.getElementById('Q7').value);
const eyeNumber=document.getElementById('eye-number').value;

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
// Funcion de calculo
const data =(Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8)=>{
    const obj={
        p1:'',
        p2:'',
        p3:'',
        p4:'',
        p5:'',
        p6:'',
        p7:'',
        p8:''
    }
    if(Q8===''){
        obj.p1=(15.71)*(Q1);
        obj.p2=(10.71)*(Q2);
        obj.p3=(10.71)*(Q3);
        obj.p4=(15.71)*(Q4);
        obj.p5=(15.71)*(Q5);
        obj.p6=(15.71)*(Q6);
        obj.p7=(15.71)*(Q7);
        obj.p8=0;
        console.log(obj);
        
    }
    else{
        obj.p1=(10)*(Q1);
        obj.p2=(5)*(Q2);
        obj.p3=(5)*(Q3);
        obj.p4=(10)*(Q4);
        obj.p5=(10)*(Q5);
        obj.p6=(10)*(Q6);
        obj.p7=(10)*(Q7);
        obj.p8=(40)*(Q8);
        console.log(obj);
        
    }
    const suma=obj.p1+obj.p2+obj.p3+obj.p4+obj.p5+obj.p6+obj.p7+obj.p8;
    return suma

}

data(questionOne,questiontwo,questionthree,questionfour,questionfive,questionsix,questionseven,eyeNumber);
