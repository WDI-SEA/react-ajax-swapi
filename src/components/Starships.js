import { Link } from 'react-router-dom'

const Starships = (props) => {
  let ships = props.starships.map((starship, i ) => {
      return (
      
          <Link to={`/${starship.name}`} key={`starship-${i}`} >
            <div className="starship-link">
              {starship.name}
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