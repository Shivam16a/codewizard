import { useState, useEffect } from 'react'
import "./Service.css"
import image1 from "../assets/image2.avif"
import { useAuth } from '../store/Auth'

// const url = "http://localhost:5000${API}/api/service/servicedata";

const Service = () => {
  const {API} = useAuth();
  const [services, setServices] = useState([]);
  const servicedata = async () => {
    try {
      const response = await fetch(`${API}/api/service/servicedata`, {
        method: "GET",
        credentials:"include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //console.log(data);

      setServices(data.mes);
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    servicedata();
  }, []);

  return <>
    <section style={{ paddingTop: "4rem", marginBottom:"3rem" }}>
      <div className="service-container" style={{marginTop:"2rem"}}>
        {services.map((item) => (
          <div className="card" key={item._id}>
            <img
              src={image1}
              alt={item.servise}
            />
            <h3>Service: {item.service}</h3>
            <p>{item.discription}</p>
            <p>price: ${item.price}</p>
            <small>provider: {item.provider}</small>
          </div>
        ))}
      </div>
    </section>
  </>
}

export default Service