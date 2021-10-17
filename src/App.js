import './App.css';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import HeaderBootstrap from "./compents/Header";
import Footer from "./compents/Footer";
import Main from "./compents/Main";
import Cards from "./compents/Cards";

function App() {

  return (
    <>
      <HeaderBootstrap />
        <Main/>
      <Footer/>
      <Cards/>
    </>
  );
}

export default App;


/*
const [check1, setCheck1] = useState(false);
  const [showError, setShowError] = useState(false);
  const checkError=(value)=>{
    check1 === false && value === 1 ? setShowError(true): setShowError(false)
  }
  useEffect(()=>{
    checkError()
  },[check1])

  const onSum = ()=>{
    if(check1){
      console.log("se fue la peticion")
    }
  }


   <header className="App-header">
        <Button
            onClick={()=> {
              setCheck1(true)
            }}
        >
          aqui btn 1
        </Button>
        { showError && <p>error aqui</p>}
        <Button onClick={async ()=> {
          //setCheck2(true)
          await checkError(1)
          onSum()
        } }>
          aqui btn 2
        </Button>
      </header>
 */
