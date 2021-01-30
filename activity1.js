score=0;
 
function uptade_score(){
    score=score+1;
    document.getElementById("score").innerHTML="Score:"+score;
}

function save_value(){
    localStorage.setItem("score",score);
}

function next_page(){
    window.location="activity_2.html";
}