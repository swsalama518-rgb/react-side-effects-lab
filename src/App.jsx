import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  // STEP 3: define function FIRST (fixes hoisting issue)
  const fetchJoke = () => {
    setLoading(true);

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching joke:", error);
        setLoading(false);
      });
  };

  // STEP 2: useEffect AFTER function exists
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />

      <FetchButton fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;