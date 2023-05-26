// get gameid from localstorage
const localmyGameId = localStorage.getItem('gameId');
let id = '';
if (localmyGameId) {
  id = localmyGameId;
}
const API = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:${id}/scores`;

export const getGameId = async () => {
  const localGameId = localStorage.getItem('gameId');
  let gameId = '';
  if (localGameId) {
    gameId = localGameId;
  } else {
    const baseurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    const response = await fetch(baseurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Game-ID' }),
    });
    const obj = await response.json();
    gameId = obj.result;
    // to remove the first 14 charcter
    gameId = gameId.slice(14);
    // to remove the last 6 char
    gameId = gameId.slice(0, -6);
    localStorage.setItem('gameId', gameId);
  }
};

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
  const mydata = await fetch(API);
  const dataresult = (await mydata.json()).result;
  dataresult.forEach((player) => {
    const newtr = document.createElement('span');
    newtr.innerHTML = `${player.user} ${player.score}`;
    scoretable.appendChild(newtr);
  });
  return dataresult;
};
