import { useState, useEffect } from "react"
import axios from 'axios'

export default function Joke() {
  //  state value to update when the API respondes to trigger a re-render
  const [joke, setJoke] = useState('')
  const [pressedKey, setPressedKey] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // the function needs a name, so it can be removed
    const handleKeyDown = e => setPressedKey(e.key)
    // mount the event listenor on the window
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)

    }
    // unmount the event listener to clean up 
  }, [pressedKey])

  // sing intervals in react
  useEffect(() => {
    const incrementCounter = () => setCounter(counter + 1)
    const interval = setInterval(incrementCounter, 500)
    return () => { 
      // we should clean up the window here
      clearInterval(interval)
    }
  }, [counter]) // only run when the counter changes

  // hook into the component lifecycle, and get data from the api
  // dot then example in useEffect
  // useEffect(() => {
  //   const options = {
  //     headers: {
  //       Accept: 'application/json'
  //     }
  //   }
  //   axios.get('https://icanhazdadjoke.com/', options)
  //     .then(response => setJoke(response.data.joke))
  // }, []) // we only need data one time
    // dont async the useEffect callback -- NO BAD!
    // write async function and invoke it
    useEffect(() => {
      // IIFE - immediately invoked function expression to the rescue
      // () = expression (function hello(args) { console.log('hello') }))(args) 
      (async () => {
        try {
          const options = {
            headers: {
              Accept: 'application/json'
            }
          }
          const { data } = await axios.get('https://icanhazdadjoke.com/', options)
          setJoke(data.joke)
        } catch (err) {
          console.error(err)
        }
      })() // invoking immediately the function expression
  }, []) // we only need data one time

  // user interaction getting api response vs programatically getting reposne (like above)
  const handleGetNewJoke = async () => {
    const options = {
      headers: {
        Accept: 'application/json'
      }
    }
    const { data } = await axios.get('https://icanhazdadjoke.com/', options)
    setJoke(data.joke)
  }

  return (
    <div>
      <h1>hello I am a joke</h1>
      <h3>{joke || 'the joke is loading...'} </h3>

      <button
        onClick={handleGetNewJoke}
      >
        Wow that was so good, I would like to hear another joke
      </button>

      <div>
        <h3>the currently pressed key is: {pressedKey}</h3>
      </div>

      <div>
        <h4>the counter is currently @: {counter}</h4>
      </div>
    </div>
  )
}