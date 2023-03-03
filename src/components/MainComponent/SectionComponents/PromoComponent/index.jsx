import { useContext } from 'react';
import { DataContext } from "../../../ContextComponent";

function Promo() {
    const data = useContext(DataContext);

    const handleOnClick = (link) => {
        window.open(link)
    }

    return (
        <section className="promo">
        <div className="promo-frame">
            <div className="promo-frame-title">
                <div className="promo-frame-title-maintext">
                    {data[1].promoMainText}
                </div>
                <div className="promo-frame-title-description">
                    {data[1].promoDescription}
                </div>
            </div>
            <input onClick={()=>handleOnClick(data[1].promoLinkToCV)} value="Check out my CV" type="button" className="checkoutCV"/>
        </div>
       </section>
    );
  }
  
  export default Promo;
  