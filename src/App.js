
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [rick, setRick] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchQuote =  async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1')

        setRick(response.data.results[0])
        setLoading(false)
      } catch (error){
        setError('Erro ao buscar rick', error)
        setLoading(false)
      }
    }

    fetchQuote()
  }, [])


  return (
   <div className='App'>
    <header className='App-header'>
    {
      loading ? (
        <p>Carregando ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (

        <>
      <p>Name: {rick.name}</p>
      <p>Status: {rick.status} </p>
      {rick.image && <img src={rick.image} alt={rick.name}></img>}        
      </>
      )      
    }

     
    </header>
   </div>
  );
}

export default App;
