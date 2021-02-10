import { Link } from 'react-router-dom'

const Starships = (props) => {
  let ships = props.starships.map((starship, i ) => {
      return (
      
          <Link className="link" to={`/${starship.name}`} key={`starship-${i}`} >
            <div className="starship-link">
              <h2>
                {starship.name}
              </h2>
            </div>
            
          </Link>
        
      )
    })

  return (
    <main>
      <div className="starships-container"> 
        {ships}
      </div>
      
    </main>
    
    
    
  )
  

};

export default Starships;