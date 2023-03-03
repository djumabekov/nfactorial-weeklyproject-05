import { useContext } from 'react';
import { DataContext } from "../../../ContextComponent";


function Project() {
    const data = useContext(DataContext);

    const handlerOnClick = (link) => {
        window.open(link)
    }

    return (
        <section  id="contacts" className="contact">
        <div className="contact-frame">
            <div className="contact-frame-title">
                <div className="contact-frame-title-maintext">
                   {data[5].contactsMainText}
                </div>
                <div className="contact-frame-title-description">
                    {data[5].contactsDescription}
                </div>
            </div>
            <input onClick={()=>handlerOnClick(data[5].contactsLink)} className="contact-frame-button" type="button" value="Get In Touch"/>
        </div>
    </section>
    );
  }
  
  export default Project;
  