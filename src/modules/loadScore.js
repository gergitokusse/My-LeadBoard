class LoadeScore {
  static loadMyScore() {
    const id = '';
    const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'
    fetch(api)
    .then((res) => 
        return res.json()
    )
    .then(data => console.log(data))
  }
  static submitScore() {
    
  }
}

module.exports = LoadeScore;