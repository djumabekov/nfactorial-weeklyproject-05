import { useContext } from 'react';
import { DataContext } from "../../../ContextComponent";

function About() {
    const data = useContext(DataContext);

    return (
        <section className="about">
        <div className="about-info">
            <div className="about-info-title">
                <div className="about-info-title-maintext">{data[2].aboutMeMainText}</div>
                <div className="about-info-title-description">{data[2].aboutMeDescription}</div>
            </div>
            <div className="about-info-list">
                <ul className="about-info-list-left">
                    {data[2].aboutMeListItems.map((item, index) => (
                        <li key={index} className="about-info-list-left-item">
                            <div className="about-info-list-left-item-point"></div> 
                            {item}
                        </li>
                    ))}
                   
                </ul>
            </div>
        </div>
        <div className="about-photo">
            <img className="about-photo-img" src={data[2].aboutMePhoto}/>
        </div>
       </section>
    );
  }
  
  export default About;
  