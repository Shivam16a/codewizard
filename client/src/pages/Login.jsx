import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image2 from '../assets/image2.avif'
import "./Login.css"
import { useAuth } from '../store/Auth'
import { toast } from 'react-toastify';

// const url = "http://localhost:5000/api/auth/login";

const Login = () => {
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: "include",
      });
      if (response.ok) {
        setUser({
          email: "",
          password: "",
        })
        const res_data = await response.json();
        // console.log("response from server", res_data.token);
        storeTokenInLS(res_data.token);
        toast.success("login success")
        navigate("/")
      } else {
        console.log("invalid credential");
        toast.error("invalid credential")

      }
    } catch (error) {
      toast.error(error)
      console.log(error);

    }

  }

  return <>
    <section style={{ paddingTop: "4rem" }}>
      <div className="parrent">
        <div className="left-div">
          <img src={image2} alt="image2" />
        </div>
        <div className="right-div">
          <div className='title'>
            <h1>Welcome!</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label><br />
              <input
                type="email"
                name="email"
                placeholder='Enter email'
                id='email'
                required
                autoComplete='off'
                value={user.email}
                onChange={handleInput}

              />
            </div>
            <div>
              <label htmlFor="password">Password</label><br />
              <input
                type="password"
                name="password"
                placeholder='Enter password'
                id="pasword"
                required
                autoComplete='off'
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <div>
              <button type='submit'>Login</button>
            </div>
            <div style={{ textAlign: "center" }}>
              <span>don't have an account <a href="/register">Register Now!</a></span>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
}

export default Login