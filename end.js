const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')


const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

    if (SCORE_POINTS>80) { 
        alert("YOU HAVE SUCESSFULLY SUBMITTED YOUR ANSWER");
        console.log("CONGRATULATIONS!! YOU SCORED 100%. REMARKS: EXCELLENT."); //EXCELLENT PERFOMANCE
      } 
      else if (SCORE_POINTS<80) {
        alert("YOU HAVE SUCESSFULLY SUBMITTED YOUR ANSWER");
        result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: EXCELLENT.";
    
      }
      else if (SCORE_POINTS<50) {
      alert("YOU HAVE SUCESSFULLY SUBMITTED YOUR ANSWER");
      result.textContent="POORLY DONE. PLEASE RETAKE "; //POOR PERFOMANCE
      }
      