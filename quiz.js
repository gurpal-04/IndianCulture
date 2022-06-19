const quizdb=[{question: "Dandia’ is a popular dance of",
a :"Punjab",
b :"Gujarat",
c :"Tamil Nadu",
d :"Maharashtra",
ans : "ans2"},
    {question: "Which Indian Academy is promoting dance, drama and music",
a :"Sahitya Academy",
b :"Lalit Kala Academy",
c :"National School of Drama",
d :"Sangeet Academy",
ans : "ans4"},
{question: "Where is Pushkar Fair held?",
a :"Udaipur",
b :"Jaisalmer",
c :"Jodhpur",
d :"Ajmer",
ans : "ans4"},
{question: "Pungi is a dance form related to the state:",
a :"Punjab",
b :"Himachal Pradesh",
c :"Haryana",
d :"Delhi",
ans : "ans2"},
{question: " ___________ is classical dance form of Uttar Pradesh:",
a :"Kathakali",
b :"Kathak",
c :"Kuchipudi",
d :"Mohiniattam",
ans : "ans2"},
{question:"Kalchakra ceremony is associated with which of the following ceremonies?",
a:"Hinduism",
b:"Jainism",
c:"Buddhism",
d:"Islam",
ans : "ans3"},
{question:"Who composed the famous song ‘Sare Jahan SeAchha’?",
a:"Mohammad Iqbal",
b:"Jaidev",
c:"Bankim Chandra Chattopadhyay",
d:"Rabindranath Tagore",
ans : "ans1"}
]


const answers = document.querySelectorAll(".options");

let i=0; 
let score=0;
const loadquestion = ()=> {
document.getElementById("question").innerHTML="Q"+(i+1)+" "+quizdb[i].question;
    document.getElementById("option1").innerHTML=quizdb[i].a;
    document.getElementById("option2").innerHTML=quizdb[i].b;
    document.getElementById("option3").innerHTML=quizdb[i].c;
    document.getElementById("option4").innerHTML=quizdb[i].d;
}
loadquestion();

function checked() {
    let ans;
    for (let j=0;j<answers.length;j++){
        if (answers[j].checked){
            ans= answers[j].id;
        }
    }return ans;
}
  
let j=0;

function nextques() {
    if (j%2===0 && timer>0){
    if (i<quizdb.length){
        const checkedAns = checked();
        if (checkedAns=== quizdb[i].ans){
        score+=1;
        document.getElementById("output").innerHTML="Correct";
        $("#output").css("color","green");
        }else{
            document.getElementById("output").innerHTML="Incorrect!";
            $("#output").css("color","red");
            timer-=10;
        }
        i++;
        document.getElementById("button").innerHTML="Next";
        
        
    }}else{
        if (i<quizdb.length && timer>0){
            loadquestion();
            document.getElementById("button").innerHTML="Submit";
            document.getElementById("output").innerHTML="";
        }else{
            $("#question").css("display","none");
            $(".options").css("display","none");
            $("#output").css("display","none");
            $("#button").css("display","none");

            document.getElementById("score").innerHTML="<br><b>You scored:</b> "+score+'<br><br> <button  class="button" onclick="location.reload();">Play Again</button>';
            document.getElementById("time").innerHTML= 00;
    }
    }j++;
}

let timer=50;
const interval = setInterval(fun,1000);

function fun(){
    if (timer<0){
        clearInterval(interval);
    }else{
    document.getElementById("time").innerHTML= timer--;
    }
}
