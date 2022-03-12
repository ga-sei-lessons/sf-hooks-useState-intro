// import the useState hook from react
import React, { useState } from 'react'

// const myObj = {
//   'key1': 1,
//   'keyTwo': 2
// }

// const newObj = { ...myObj } // has key1 and key2

// function useState() {
//   let state = ???
//   function setState() {
//     ...
//   }
//   return [state, setState]
// }

export default function Counter() {
  // const [state, functionThatSetsState] = useState(defualtValue)
  const [count, setCount] = useState(15)
  // setting an object 
  // this will eventually be an object, so set it to one first (we need the values first also)
  const [user, setUser] = useState({
    name: 'Weston',
    favFood: '🍕'
  })
  const [msg, setMsg] = useState('')

  // const useStateArray = useState(0)
  // const count = useStateArray[0]
  // const setCount useStateArray[1]
  // const handleIncreaseCount = () => {
  //   // 100% okay to use `count' as the previous state
  //   // setcount(newStateValue)
  //   setCount(count + 1) // just pass in the new state value
  // }
  
  // handleMethod = () => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  const handleSubmit = e => {
    e.preventDefault()
    setMsg('good job submitting the form!')
  }
  return (
    <div>
      <h1>Woot Woot! I Love HHOOOOKKKSSSs 🪝</h1>

      <h3>the count currently is: {count}</h3>

      <button
        onClick={() => setCount(count + 1)}
      >
        Click here to increase the count!
      </button>

      <button
        onClick={() => setCount(count - 1)}
      >
        Decrease the count
      </button>

      <h2>the current user is: {user.name}</h2>
      <h4>their fav food is: {user.favFood}</h4>
      <h1>{msg}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Enter your name:</label>
        <input 
          id="name-input"
          type="text"
          placeholder='enter your name, user'
          onChange={e => setUser({ ...user, name: e.target.value })}
          value={user.name}
        />

        <label htmlFor='favFood-input'>Enter Your Food</label>
        <input 
          id="favFood-input"
          type="text"
          placeholder='you do like food dont your?'
          onChange={e => setUser({  ...user, favFood: e.target.value })}
          value={user.favFood}
        />

        <input type="submit" value="do it, submit the form!" />
      </form>
    </div>
  )
}