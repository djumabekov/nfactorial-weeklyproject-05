import { useContext } from 'react';
import { DataContext } from "../ContextComponent";

function Footer() {
    const data = useContext(DataContext);

    return (
<footer className="footer">
        <div className="footer-frame">
            <div className="footer-frame-menu">
                <div className="footer-frame-menu-made">
                    {data[6].footerMade}
                </div>
            </div>
            <div className="footer-frame-from">
                <div className="footer-frame-from-links">
                    <p>Credits: photos from <a href={data[6].footerLinks[0]} target="_blank"> Unsplash.com </a>, icons from <a href={data[6].footerLinks[1]} target="_blank"> Icons8 </a>.</p>
                </div>
            </div>  
        </div>
    </footer> 
    );
  }
  
  export default Footer;