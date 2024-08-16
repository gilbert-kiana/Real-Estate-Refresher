import "./homepage.scss"
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
     <div className='homePage'>
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">
              Find Real Estate & Your Dream Place
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus facilis illum voluptatem sint ut id ipsam possimus sunt.
              Molestiae sequi enim amet assumenda iure dignissimos.
              Rerum molestiae expedita voluptas? Suscipit.
            </p>
            <SearchBar/>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt=""/>
        </div>
    </div> 
  )
}

export default HomePage;