import './App.css';
import Main from './components/MainComponent'
import { DataContext } from "./components/ContextComponent";
import Layout from "./components/LayoutComponent";
import { useEffect, useState } from 'react';
import Loader from "react-spinners/RotateLoader";

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    fetch('https://63d10dc73f08e4a8ff8f6d5d.mockapi.io/api/data')
    .then(response => response.json())
    .then(data => {
      setData(data); setIsLoading(false); console.log(data)
    })
    .catch(function(error) {
      console.log("Error get data from API", error)
    })
  }, []);

  const override = {
    position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
  };

  return (
    <>
    {isLoading ? 
    <Loader color={'#FD5A14'} loading={isLoading} cssOverride={override} size={150} aria-label="Loading..." data-testid="loader"/>
    :
    <DataContext.Provider value={data}>
      <Layout>
          <Main/>
      </Layout>
    </DataContext.Provider>
}
    </>
  );
}

export default App;
