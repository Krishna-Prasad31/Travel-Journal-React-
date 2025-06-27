import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Swiss from "./assets/1.jpeg"
import Tokyo from "./assets/2.jpeg"
import China from "./assets/3.jpeg"
import Australia from "./assets/4.jpeg"

function App () {
  return (
    <>
     <Header />
    <Card
       img={Swiss}
      location="Swiss Alps"
      mapLink="https://www.google.com/maps/place/Swiss+Alps/@46.5601056,8.5610781,5027m/data=!3m1!1e3!4m6!3m5!1s0x478576eb2f97f733:0x41140a31bc0c273!8m2!3d46.5601061!4d8.5610781!16zL20vMGZjZHQ?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
      country="Switzerland"
      dates="12 Jan, 2023 - 24 Jan, 2023"
      description="I spent a week in the heart of the Swiss Alps, surrounded by snow-capped peaks, emerald lakes, and charming alpine villages. Every morning began with crisp mountain air and postcard views, and each day was an adventure—from hiking scenic trails to sipping hot chocolate in wooden chalets. It felt like stepping into a dream carved out of nature"
    />

    <Card
    img={Tokyo}
      location="Tokyo"
      mapLink="https://www.google.com/maps/place/Tokyo,+Japan/@35.5092405,139.7698121,380867m/data=!3m2!1e3!4b1!4m6!3m5!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6764225!4d139.650027!16zL20vMDdkZms?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
      country="Japan"
      dates="23 May, 2023 - 30 May, 2023"
      description="Tokyo feels like stepping into the future while holding hands with the past. As I wander through neon-lit streets in Shibuya, then stumble into a quiet shrine tucked between skyscrapers, I’m struck by how seamlessly the old and new coexist. Vending machines hum on every corner, yet a tea ceremony feels just as present. The city moves fast, but there’s a rhythm to it—a quiet courtesy in the chaos. Every turn surprises me, and somehow, even in the world’s busiest city, I feel at peace."
    />

    <Card
    img={China}
      location="Great Wall of China"
      mapLink="https://www.google.com/maps/place/Great+Wall+of+China/@40.4319077,116.5703749,696m/data=!3m2!1e3!4b1!4m6!3m5!1s0x35f121d7687f2ccf:0xd040259b950522df!8m2!3d40.4319077!4d116.5703749!16zL20vMGQyZHEw?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
      country="Japan"
      dates="2 July, 2023 - 6 July, 2023"
      description="Standing atop the Great Wall of China, I felt both small and infinite. The wall stretched endlessly across mountains and valleys, like a dragon woven into the earth. Each stone beneath my feet whispered stories of emperors, soldiers, and centuries past. The climb was steep, the wind sharp, but the view—breathtaking. Surrounded by ancient history and vast silence, I wasn’t just looking at the wall—I was part of it, if only for a moment."
    />

    <Card
    img={Australia}
      location="Uluru"
      mapLink="https://www.google.com/maps/place/Uluru/@-25.3456572,131.0371459,6607m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2b236c2b6d625223:0x43a8cd4d9bc55f21!8m2!3d-25.3444277!4d131.0368822!16zL20vMF81eGM?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
      country="Japan"
      dates="12 November, 2023 - 18 November, 2023"
      description="Visiting Uluru felt like touching the soul of Australia. As the sun rose, the massive red rock seemed to breathe, shifting colors from deep purple to fiery orange. Standing before it, I felt an overwhelming sense of respect—for the land, the silence, and the ancient stories held within its stone. The air was still, the desert vast, and yet Uluru made the world feel focused, sacred. It wasn’t just a place—it was a presence, and it left something in me I didn’t know I was missing."
    />
    </>
   
  )
}

export default App