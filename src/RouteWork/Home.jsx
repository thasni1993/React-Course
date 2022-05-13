import "./ExampleIndex.css";
import React, { Component } from 'react'
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpeg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jfif';
import image8 from './image8.jpg';


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Silver Rings</h2>

            <div className="homeimg">
                <img src={image1}  alt="tree"/>
                <p>Rs.2000</p>
                <button>Buy Now</button>
            </div>
            <div className="homeimg">
                <img src={image2} alt="image2" />
                <p>Rs.4280</p>
                <button>Buy Now</button>
            </div>
            <div className="homeimg">
                <img src={image3} alt="night" />
                <p>Rs.2400</p>
                <button>Buy Now</button>
            </div>
            <div className="homeimg">
                <img src={image4} alt="night" />
                <p>Rs.1800</p>
                <button>Buy Now</button>
            </div>
            <div className="homeimg">
                <img src={image5} alt="night" />
                <p>Rs.2800</p>
                <button>Buy Now</button>
            </div>
            <div className="homeimg">
                <img src={image6} alt="night" />
                <p>Rs.3200</p>
                <button>Buy Now</button>
            </div>
            <div className="homeimg">
                <img src={image7} alt="night" />
                <p>Rs.3900</p>
                <button>Buy Now</button>
            </div>
            <div className="homeimg">
                <img src={image8} alt="night" />
                <p>Rs.3300</p>
                <button>Buy Now</button>
            </div>
            </div>
        )
    }
}

