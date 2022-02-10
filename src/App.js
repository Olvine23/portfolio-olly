import { useState } from 'react';
import './App.css';
import colorData from './color-data.json'
import ColorList from './ColorList.js'
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import FormData from './components/FormData';
import { Header } from './components/Header'
import Example from './components/Products'
import {useSelector} from 'react-redux';
import { increment, decrement, clear, add_five } from './actions';
import { useDispatch } from 'react-redux';
 

function App() {
  const dispatch = useDispatch();
  const five = useSelector(state => state.five )
  const counted = useSelector(state => state.counter)
  const isLogged = useSelector(state =>  state.isLogged)
   
 
  return (
     
    <div className="App">
      <h1 className="text-red-500">Current count is {counted} </h1>
      
      <button className="font-bold text-7xl" onClick={() => dispatch(increment())}>+</button>
      <button className="font-bold text-7xl" onClick={() => dispatch(decrement())}>-</button>
      <button className="font-bold text-7xl" onClick={() => dispatch(clear())}>c</button>
      <h1 className="text-3xl font-bold underline">
      Hello world! {counted}
    </h1>
    <p>Added {five} to the initial state</p>
    <button onClick={() => five(add_five())}>add five</button>
    {isLogged ? <> <Header /> <Example /> </> : "LOGIN FIRST TO SEE ADDITIONAL CONTENT"
      }


      
      
      {/* <Nav />
      <FormData />
      <ColorList 
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors =colors.map(color => 
          color.id === id ? {...color, rating} : color);
          setColors(newColors)
      }}
      onRemoveColor={id => {
        const newColors =  colors.filter(color => color.id !== id)
        setColors(newColors)

      }} /> */}
    
      
    </div>
     
  );
}

export default App;
