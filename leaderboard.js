const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

document.querySelector(".container").style.cssText = "display: flex; justify-content: center";
document.querySelector("#highScores").style.cssText = "display: flex; justify-content: center; flex-direction: column; align-items: center;";
document.querySelector(".leaderboard").style.cssText = "font-size: 4rem; color: red; margin: 40px auto";
document.querySelector("#playAgain").style.cssText = "font-size: 1.5rem; font-weight: 900; color: black; padding: 2rem 4rem; text-align: center; margin-bottom: 1rem; text-decoration: none; border-radius: 4px; background: blue;";
document.querySelector("#resetScoreBtn").style.cssText = "font-size: 1.5rem; font-weight: 900; padding: 2rem 1rem; text-align: center; margin-bottom: 1rem;text-decoration: none; border-radius: 4px; background: blue;";








highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')

document.querySelector(".high-score").style.cssText = "font-size: 1.5rem; color: white; padding: 2rem 0";

clearAll = () => {
    // e.preventDefault()

    window.localStorage.clear()
    window.location.reload();

    // window.location.assign = '/'
}