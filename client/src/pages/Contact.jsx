import { useState } from "react";
import image2 from '../assets/image2.avif'
import './Contact.css'
import { useAuth } from '../store/Auth';
// const url = "http://localhost:5000/api/contact/message";
import { toast } from 'react-toastify';

const Contact = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);
  const { users, API } = useAuth();

  if (users && userData) {
    setUser({
      username: users.username,
      email: users.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/contact/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: "include",
      });
      if (response.ok) {
        setUser({
          username: "",
          email: "",
          message: "",
        })
        toast.success("message received successfull");
      }
      // toast.error("message not recieved");
    } catch (error) {
      toast.error(error);
      console.log(error);

    }
  }

  return <>
    <section style={{ paddingTop: "4rem", marginBottom: "2rem" }}>
      <div className="parrent-div">
        <div className="left-clild">
          <img src={image2} alt="contact image1" />
        </div>
        <div className="rignt-child">
          <div style={{ display: "flex", justifyContent: "center", color: "blue" }}>
            <h1>Welcome!</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label><br />
              <input
                type="text"
                name='username'
                id='username'
                required
                autoComplete='off'
                placeholder='Enter username'
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label><br />
              <input
                type="email"
                name='email'
                id='email'
                required
                autoComplete='off'
                placeholder='Enter email'
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label><br />
              <textarea
                name="message"
                id="message"
                cols="33"
                rows="5"
                value={user.message}
                onChange={handleInput}
              />
            </div>
            <button type='submit'>Send message</button>
          </form>
        </div>
      </div>
      <div style={{ width: "100%", height: "450px", paddingBottom: "20px" }} id="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.2549405875793!2d86.23800377609477!3d26.350614984019092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edd5186b8cf185%3A0x2ccd5f32bf594fdb!2sSandip%20University%2C%20Sijoul!5e0!3m2!1sen!2sin!4v1766038217933!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "2px solid #ccc" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sandip University Map"
        />
      </div>
    </section>
  </>
}

export default Contact