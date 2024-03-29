const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

document.body.style.cssText = 'background: navy;background-image: url(./assets/Images/hexImages.jpg);';
document.querySelector('.container').style.cssText = 'display: flex; justify-content: center';
document.querySelector('.leaderboard').style.cssText = 'font-size: 4rem; color: red; margin: 40px auto; text-align: center;';
document.querySelector('#playAgain').style.cssText = 'font-size: 1.5rem; font-weight: 900; color: black; padding: 2rem 4rem; text-align: center; margin-bottom: 1rem; text-decoration: none; border-radius: 4px; background: blue;';
document.querySelector('#resetScoreBtn').style.cssText = 'font-size: 1.5rem; font-weight: 900; padding: 2rem 1rem; text-align: center; margin-bottom: 1rem;text-decoration: none; border-radius: 4px; background: blue;';

highScoresList.style.cssText = ('style', 'display:flex; justify-content: center; flex-direction: column;');
highScoresList.innerHTML = highScores.map((score) => `<li class="high-score" style="font-size: 1.5rem; color: white; padding: 2rem 0; text-align: center;">${score.name} - ${score.score}</li>`).join('');

clearAll = () => {
  window.localStorage.clear();
  window.location.reload();
};
