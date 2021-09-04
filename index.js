
function getMarks(){
    
    const maths = Number(document.getElementById("maths").value);
    const physics = Number(document.getElementById("physics").value);
    const chemistry = Number(document.getElementById("chemistry").value);
    const biology = Number(document.getElementById("biology").value);
    const scoreObtained = maths + physics + chemistry + biology;
    const totalScore = 400;
    const percent = (scoreObtained/totalScore) *100;

    


    const percentage =document.getElementById("percentage").innerHTML="Your percentage is:" + percent +"%";
    const grade = document.getElementById("grade");
    if(percent > 50){
        document.getElementById("bottom").innerHTML = "You have passed."
    }else if( percent <= 45 ){
        document.getElementById("bottom").innerHTML = "You have failed,repeat."
    }


    if(percent >= 90){
        grade.innerHTML = "Your grade is A.";
    }else if( percent < 90 && percent > 80 ){
        grade.innerHTML = "Your grade is B.";
    }else if(percent < 70 && percent >= 60){
        grade.innerHTML = "Your grade is C.";
    }else if(percent > 50 &&  percent < 60){
        grade.innerHTML = "Your grade is D.";
    }else if(percent < 50 && percent > 45){
        grade.innerHTML = "Your grade is E.";
    }else{
        grade.innerHTML = "Your grade is F.";
    }
}