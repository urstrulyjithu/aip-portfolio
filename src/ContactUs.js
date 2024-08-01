import React , {forwardRef} from 'react';
import './App.css';
import Card from './Card';
import jithu from "./jithu.png"
import dimpal from "./dimpal.png"
import emon from "./emon.png"
import manan from "./Manan.png"
import deepak from "./deepak.png"


const ContactUs  = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contact-container">
         <div className="overlay2"></div>
     <Card photo={jithu} name={"Jithendra Nath Chavva"} role={"FullStack Developer"} place={"Hyderabad-India"} linkedin={"https://www.linkedin.com/in/chavva-jithendra-nath-a64737184/"}/>
     <Card photo={deepak} name={"Deepak Bhartwal"} role={"Quality Assurance"} place={"delhi , India"} />
     <Card photo={manan} name={"Manan"} role={"FullStack Developer"} place={"Rajkot , India"} />
     <Card photo={dimpal} name={"Dimpal Patel"} role={"R and D"} place={"valsad , India"} />
     <Card photo={emon} name={"Soureen Mondal"} role={"Frontend Developer"} place={"Darjeeling , India"} />
    </div>
  );
});

export default ContactUs;
