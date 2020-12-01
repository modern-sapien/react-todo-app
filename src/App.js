import React from "react";

const App= () => {
  const YOUR_APP_ID="c582f898"
  const YOUR_APP_KEY = "09afa49e22b51ca3811e9b170f71788c"

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  return (
    <div className="App">
        <h1>todo</h1>
    </div>
  );
}

export default App;
