import React from 'react';
import '../App.css'
import logo from '../asserts/logo.png'
import firstPic from '../asserts/1.png'
import secondPic from '../asserts/2.png'
import thirdPic from '../asserts/3.png'


const YourReactComponent = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container">
        <div className="trophy">
          <img src={firstPic} alt="Trophy" />
        </div>

        <div className="details">

          
          <h4 className="headline">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          
          <ul className="details-text">
            <li>C.R.I.'s energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5-star rated energy-efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <div className="details">
            <img src={secondPic} alt="Second Image with Details" />
          </div>
          <div className="award-text">
            <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
      </div>

      <div className="full-width">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={thirdPic} alt="Third Image Full Width" />
        <p>Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>

      <div className="divider"></div>

      <div>
        <h5 className="segment"><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></h5>
        <p className="segment1">CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR | BUILDING | HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
      </div>

      <footer>
        <div className="footer-details">
          <span>Toll-free 1800 200 1234</span>
          <span>www.facebook.com/cripumps</span>
          <span>www.crigroups.com</span>
        </div>
      </footer>
    </div>
  );
}

export default YourReactComponent;
