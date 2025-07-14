const ques = ["Forming of Association in India is?","Patanjali is well known for the compilation of ?","The World Largest desert is?","In 1924 the first winter Olympics was held in ?"," Elections to panchayats in state are regulated by?"];
const ans = ["d","a","c","b","d"];
const options = [["Legal Right","Illegal Right","Natural Right","Fundamental Right"],["Yoga Sutra","Panchatantra","Brahma Sutra","Ayurveda"],["Thar","Kalahari","Sahara","Sonoran"],["Italy","France","Austria","Canada"],["Gram panchayat","Nagar Nigam","Election Commission of India","State Election Commission"]];
let counter = 0;
let i=0;
function next(){
if(i==5){
document.getElementById("question").innerHTML="YOUR SCORE IS : "+counter+"/10";
document.getElementById("a").parentNode.removeChild(a);
document.getElementById("b").parentNode.removeChild(b);
document.getElementById("c").parentNode.removeChild(c);
document.getElementById("d").parentNode.removeChild(d);
document.getElementById("a_text").parentNode.removeChild(a_text);
document.getElementById("b_text").parentNode.removeChild(b_text);
document.getElementById("c_text").parentNode.removeChild(c_text);
document.getElementById("d_text").parentNode.removeChild(d_text);
document.getElementById("submit").parentNode.removeChild(submit);
}else{
document.getElementById("question").innerHTML=ques[i];
document.getElementById("a_text").innerHTML = options[i][0];
document.getElementById("b_text").innerHTML = options[i][1];
document.getElementById("c_text").innerHTML = options[i][2];
document.getElementById("d_text").innerHTML = options[i][3];
i++;
}
}
function submitAns(){
selected();
next();
deselect();
}
let checkAnswers= document.querySelectorAll('.answer');
function deselect(){
checkAnswers.forEach(answerEl => answerEl.checked = false)
}
function selected(){
let marked
checkAnswers.forEach(answerEl => {
if(answerEl.checked) {
marked = answerEl.id
}
});
if(marked==ans[i-1]){
counter+=2;
}
}
next();