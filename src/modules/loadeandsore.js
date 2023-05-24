const id = 'tiaMme5JWBzOUhTD4yXu';
const API = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:${id}/scores`;

export const addScore = async (player) => {
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });
};

export const getmyscore = async () => {
  const scoretable = document.querySelector('.score-table');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:tiaMme5JWBzOUhTD4yXu/scores';
  const mydata = await fetch(url);
  const dataresult = (await mydata.json()).result;
  dataresult.forEach((player) => {
    const newtr = document.createElement('span');
    newtr.innerHTML = `${player.user} ${player.score}`;
    scoretable.appendChild(newtr);
  });
  return dataresult;
};
