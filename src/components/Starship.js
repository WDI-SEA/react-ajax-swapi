const Starship = (props) => {

  return (
    <main>
    <div className="starship-detail">
      <h1> details: </h1>
      <h2> Name: {props.name} </h2>
      <h3>Model: {props.model}</h3>
      <a href="/">Return to All ships</a>
    </div>

    </main>
    
  )
  

};

export default Starship;