import { useState, useEffect } from 'react'
import "./Service.css"
import image1 from "../assets/image2.avif"

const url = "http://localhost:5000/api/service/servicedata";

const Service = () => {
  const [services, setServices] = useState([]);
  const servicedata = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
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