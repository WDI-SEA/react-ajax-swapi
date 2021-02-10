import { Link } from 'react-router-dom'
const Starship = (props) => {

  return (
    <main>
    <div className="starship-detail">
      <h1> details: </h1>
      <h2> Name: {props.name} </h2>
      <h3>Model: {props.model}</h3>
      <Link to="/">Return to All ships</Link>
    </div>

    </main>
    
  )
  

};

export default Starship;