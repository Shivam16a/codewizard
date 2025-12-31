import image1 from '../assets/image1.avif'

const Home = () => {
  return <>
    {/* first section */}
    <main style={{paddingTop:"2rem"}}>

    <section className='first-section'>
      <div className="grid grid-two-cols">
        <div className="first-div">
          <p>Lorem ipsum dolor sit amet.</p>
          <h1>Welcome to the <span style={{ color: "red" }}>CODE</span>WIZARD</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error cum quod, tempore quas officiis optio unde, labore quibusdam a doloremque reprehenderit ipsam quam quisquam nobis impedit harum odio. Laudantium, ullam cumque. Eligendi fugit, culpa nostrum labore eius distinctio ex aperiam iste, veritatis pariatur velit, facere inventore. Quia, ducimus ea.</p>
          <div className='buttons'>
            <a href="/about"><button>About more</button></a>
            <a href="/contact"><button id='last-btn'>contact</button></a>
          </div>
        </div>
        <div className="second-div">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
    {/* second section */}
    <section className='second-section'>
      <div className="grid grid-four-cols">
        <div className="div1">
          <p>50+</p>
          <p>services</p>
        </div>
        <div className="div1">
          <p>200+</p>
          <p>clients</p>
        </div>
        <div className="div1">
          <p>200+</p>
          <p>Active user</p>
        </div>
        <div className="div1">
          <p>500+</p>
          <p>projects</p>
        </div>
      </div>
    </section>
    {/* third section */}
    <section className='first-section'>
      <div className="grid grid-two-cols">
        <div className="second-div">
          <img src={image1} alt="" />
        </div>
        <div className="first-div">
          <p>Lorem ipsum dolor sit amet.</p>
          <h1 style={{color:"blue"}}>Welcome!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error cum quod, tempore quas officiis optio unde, labore quibusdam a doloremque reprehenderit ipsam quam quisquam nobis impedit harum odio. Laudantium, ullam cumque. Eligendi fugit, culpa nostrum labore eius distinctio ex aperiam iste, veritatis pariatur velit, facere inventore. Quia, ducimus ea.</p>
          <div className='buttons'>
            <a href="/about"><button>About more</button></a>
            <a href="/service"><button id='last-btn'>service</button></a>
          </div>
        </div>
        
      </div>
    </section>
    </main>
  </>
}

export default Home