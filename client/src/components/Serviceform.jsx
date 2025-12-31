import { useState } from 'react'
import "./Service.css"

const url = "http://localhost:5000/api/service/serviceform";
const Serviceform = () => {
    const [serviceData, setServiceData] = useState({
        service: "",
        discription: "",
        price: "",
        provider: "",
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setServiceData({
            ...serviceData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const request = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(serviceData),
                credentials:"include",
            });
            if (request.ok) {
                setServiceData({
                    service: "",
                    discription: "",
                    price: "",
                    provider: "",
                })
                alert("service data send successfully");
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return <>
        <section style={{ paddingTop: "4rem" }}>
            <div className="parrent">
                <div className='child'>
                    <h1 style={{textAlign:"center"}}>Add services</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="service">Service</label><br />
                            <input
                                type="text"
                                name='service'
                                id='service'
                                required
                                autoComplete='off'
                                placeholder='Enter service name'
                                value={serviceData.service}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="discription">Discription</label><br />
                            <input
                                type="text"
                                name='discription'
                                id='discription'
                                required
                                autoComplete='off'
                                placeholder='Write Discription'
                                value={serviceData.discription}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label><br />
                            <input
                                type="number"
                                name='price'
                                id='price'
                                required
                                autoComplete='off'
                                placeholder='Enter service price'
                                value={serviceData.price}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="provider">Provider</label><br />
                            <input
                                type="text"
                                name='provider'
                                id='provider'
                                required
                                autoComplete='off'
                                placeholder='Enter service provider name'
                                value={serviceData.provider}
                                onChange={handleInput}
                            />
                        </div>
                        <button type='submit'>Add data</button>
                    </form>
                </div>
            </div>
        </section>
    </>
}

export default Serviceform