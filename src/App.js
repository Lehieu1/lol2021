import { useEffect, useState } from 'react';
import './App.css';
import Champion from './Components/Champion';
import Infor from './Components/Infor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/Search';

function App() {
  const [Heros, setHero] = useState([])
  const [ConstHeros, setConstHeros] = useState([])
  useEffect(() => {
    const GetAPI = async () => {
      const URL = "https://ddragon.leagueoflegends.com/cdn/11.21.1/data/vn_VN/champion.json";
      const reponse = await fetch(URL);
      const reponseJSON = await reponse.json();
      const data = reponseJSON.data;
      const element = [];
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          element.push(key);
        }
      }
      setHero(element);
      setConstHeros(element);
    }
    GetAPI();
  }, [])
  const SearchHero = name => {
    let newname = name.toLowerCase();
    let newHeros = []
    for (let hero of ConstHeros) {
      let newhero = hero.toLowerCase();
      if (newhero.indexOf(newname) > -1)
        newHeros.push(hero)
    }
    console.log(newHeros)
    setHero(newHeros)
  }

  return (
    <div className="container">

      <Search func={SearchHero} />
      <Router>
        <Switch>
          <Route exact path="/">

            <div className="list-Champion">
              {Heros.map(hero => (
                <Champion hero={hero} key={hero} />
              ))
              }
            </div>
          </Route>
          {Heros.map(hero => {
            let url = `/${hero}`
            return (
              <Route exact path={url} key={hero}>
                <Infor hero={hero}></Infor>
              </Route>
            )
          })}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
