import image1 from "../assets/image1.avif"
import { useAuth } from "../store/Auth"

const About = () => {
  const {users} = useAuth();
  const user = users?.username;
  return <>
    <section className='about-section' style={{ paddingTop: "2rem" }}>
      <div className="grid grid-two-cols">
        <div className="first-div">
          <div>
            <p>Hii!👋{user}</p>
          </div>
          <div>
            <h1>Welcome to the <span style={{ color: "red" }}>CODE</span>WIZARD </h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo obcaecati vero veniam! Tempore, neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat vel quae non, quisquam repellendus?</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quaerat voluptates unde ratione molestias hic.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iusto aliquam, modi autem esse saepe!</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quaerat voluptates unde ratione molestias hic.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iusto aliquam, modi autem esse saepe!</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quaerat voluptates unde ratione molestias hic.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iusto aliquam, modi autem esse saepe!</p>
          </div>
          <div className='buttons'>
            <a href="/service"><button>service</button></a>
            <a href="/contact"><button id='last-btn'>contact</button></a>
          </div>
        </div>
        <div className="second-div">
          <img src={image1} alt="about page image" />
        </div>
      </div>
    </section>

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
  </>
}

export default About