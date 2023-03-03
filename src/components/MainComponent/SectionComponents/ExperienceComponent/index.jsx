import { useContext } from 'react';
import { DataContext } from "../../../ContextComponent";

function Experience() {
    const data = useContext(DataContext);
    return (
        <section className="experience">
        <div className="experience-info">
            <div className="experience-info-title">
                {data[3].experienceMainText}
            </div>
            
            <ul className="experience-info-list">
            {data[3].experienceListItems.map((item, index) => (

                <li key={index} className="experience-info-list-item">
                <div className="experience-info-list-item-year">
                {item.date}
                </div>
                <div className="experience-info-list-item-frame">
                    <div className="experience-info-list-item-frame-info1">
                        <div className="experience-info-list-item-frame-info1-role">
                            <div className="experience-info-list-item-frame-info1-role-point"></div>
                            <div className="experience-info-list-item-frame-info1-role-text"> {item.role}</div>
                        </div>
                        <div className="experience-info-list-item-frame-info1-country"> {item.country}</div>
                    </div>
                    <div className="experience-info-list-item-frame-info2">
                        <div className="experience-info-list-item-frame-info2-description">
                        {item.description}
                        </div>
                    </div>
                </div>
                </li>
            ))}
                
            </ul>
        </div>
       </section>
    );
  }
  
  export default Experience;
  