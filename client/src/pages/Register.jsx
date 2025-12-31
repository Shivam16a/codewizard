import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from "../assets/image1.avif"
import "./Register.css"
import { useAuth } from '../store/Auth'
import { toast } from 'react-toastify';

const url = "http://localhost:5000/api/auth/register";

const Register = () => {
  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    console.log(e);
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
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        })

        const res_data = await response.json();
        console.log("response from server",res_data.token);
        storeTokenInLS(res_data.token);
        toast.success("Registration seccussfull");
        navigate("/")
      } else {
        console.log("invalid credential");
        toast.error("invalid credential")

      }
      console.log("register", response);

    } catch (error) {
      console.log(error);

    }

  }

  return <>
    <section style={{ paddingTop: "3rem" }}>
      <div className="parrent">
        <div className="left-child">
          <img src={image1} alt="register" />
        </div>

        <div className="right-child">
          <div className="title" style={{ color: "blue" }}><h1>Welcome!</h1></div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Name</label> <br />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your emial address"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label> <br />
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label> <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className='btn'>
                <button type='submit'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Register