const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')





clearAll = () => {
    // e.preventDefault()

    window.localStorage.clear()
    window.location.reload();

    // window.location.assign = '/'
}