import './Body.css'

function Card (props) {
return(
  <article className="body">
    <div className="image-container">
      <img src={props.img} alt={props.location} />
    </div>
    <div>
      <div className="location">
        <div>
        <p className="text">{props.location}</p>
      </div>
      <div>
        <a href={props.mapLink}>Google Maps</a>
      </div>
      </div>
      
      <div>
        <h2>Country:{props.country}</h2>
      </div>
      <div>
        Date: <span>{props.dates}</span>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  </article>
)
}

export default Card