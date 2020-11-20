<img src="https://i.imgur.com/go18uJE.jpg">

# Star Wars API - React AJAX practice

---

## Intro

In this deliverable, you'll consume the [Star Wars API](https://swapi.dev/) and render it's data utilizing the `useState` and `useEffect` React hooks within a React Router.

## To Get Started
- `Fork` and `clone` this repo
- Use `npx create-react-app` to create a React app named `react-star-wars`
- `cd` into `react-star-wars` and open VS Code.
- `npm i axios` to be able to access this API

## Setup
- Since we'll be using a Router, we'll need to import BrowserRouter in `index.js` and wrap it around `App`.
```js
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

- We'll also need to create a `Router.js` component that will create `Routes` to several components inside of a `Switch`.
- In `App.js` we need to import and render our `Router`
- From here, we'll need 2 more components:
- `Home.js`
- `StarshipPage.js`


## Exercises

> Styling is secondary to completing the functionality, but feel free to style if you complete this early.



### 1. Router.js
- `useEffect` and `useState` will be _useful_ in accomplishing this goal.
- You'll need to make an axios call to the Star Wars API within your `Router` component with `useEffect` to get all Starships: https://swapi.dev/api/starships
- You'll also need to create a `useState` variable `starships` at the top of your `Router` component and set its state within your `useEffect` to all of the starships from the API.
- Inside of your `Switch` you'll need 2 routes. One with an exact path of `/` and one with a path of `/starships'
- The `/` route should render your `Home` component, which should also have a prop called `starships'
- The `/starships` route will render the `StarshipPage` component, but its render will be utilizing `props.location` to render a single starship, like so:
```js
render={(props) => <StarshipPage location={props.location} />} >
```

### Home.js
- Your home page will render clickable links for every starship in the starship state. Example:

<img src="https://i.imgur.com/VERV0nk.png">

- Each link should have a `location` defined by the current state of the starships state
- This location will be used to define the specific path to an individual starship.
```js
{props.starships.map(starship => {
  let location = {
    pathname: '/starship',
    state: starship
  }
  return (
    <Link
      to={location}
      key={starship.name}
    >
      {starship.name}
    </Link>
  )
})
```
- If there are no starships, your `Home` page should display that it is `Loading...`

### Starship.js
- When a starship `<Link>` is clicked on the `Home` page a `<StarshipPage>` component should be rendered that displays the starship's `name`, `model` and a "Return to Starship List" `<Link>` that routes back to `Home` page. For example:

<img src="https://i.imgur.com/IjRwsHk.png">

- For your `Starship.js` to have access to the specific ship that was clicked, you'll need a variable that accesses the location props sent from `Router.js`.
```js
let starship = props.location.state
```
- Because the data is being loaded asynchronously, there are times, such as if the user refreshes the page while viewing the `<StarshipPage>`, that the data won't be available to render, in this case, display a `Loading...` message instead.

## Hints

- Hold the starships in state.

- The challenge is to be able to have the `<StarshipPage>` component obtain the specific starship object it needs to render

- Be sure the `<Route>` component that is rendering `<StarshipPage>` passes the `location` object to it.

- `console.log`!!!


## Bonus

- Enhance the `<StarshipPage>` component to render a `<PilotList>` component that lists the names of the pilots for that starship.

- If the starship has no pilots, display a "No Pilots" message.

	Hint: This requires a call to the API for each of the endpoints listed in the starship's `pilots` array. Using `async`/`await` can help with this - [here's a repl](https://repl.it/@jim_clark/Multiple-AJAX-Calls) that shows how to fetch the pilots in parallel.

---

Adapted from [SEI-DT-71 lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/4_mern_stack/w11/d3/03-react-ajax-lab/react-ajax-lab.md)
