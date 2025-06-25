import Swiss from "./assets/download.jpeg"
import './Body.css'

function Body () {
return(
  <article className="body">
    <div className="image-container">
      <img src={Swiss} alt="Swiss-Alps" />
    </div>
    <div>
      <div className="location">
        <div>
        <p className="text">●Swiss Alps</p>
      </div>
      <div>
        <a href="https://www.google.com/maps/place/Swiss+Alps/@46.5601056,8.5610781,5027m/data=!3m1!1e3!4m6!3m5!1s0x478576eb2f97f733:0x41140a31bc0c273!8m2!3d46.5601061!4d8.5610781!16zL20vMGZjZHQ?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D">Google Maps</a>
      </div>
      </div>
      
      <div>
        <h2>Country:Switzerland</h2>
      </div>
      <div>
        Date: <span>12 Jan, 2023 - 24 Jan, 2023</span>
      </div>
      <div>
        <p>I spent a week in the heart of the Swiss Alps, surrounded by snow-capped peaks, emerald lakes, and charming alpine villages. Every morning began with crisp mountain air and postcard views, and each day was an adventure—from hiking scenic trails to sipping hot chocolate in wooden chalets. It felt like stepping into a dream carved out of nature</p>
      </div>
    </div>
  </article>
)
}

export default Body