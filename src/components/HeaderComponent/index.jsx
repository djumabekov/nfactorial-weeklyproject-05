import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from "../ContextComponent";
import { scroller } from "react-scroll";

function Header() {
  const data = useContext(DataContext);
  const [activeMenuId, setActiveMenuId] = useState(-1);

  const scrollToElement = (element, id) => {
    setActiveMenuId(id)
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -80
    });
  
  };
  
  return (
    <header className="header">
    <div className="logo" onClick={()=>scrollToElement(data[0].url, -1)}>
        {data[0].name}
    </div>
    <nav className="menu">
      {data[0].links.map((link, index) => (
         <a id={index} onClick={(e)=>scrollToElement(link.url, e.target.id)} key={index} className={"menu_link" + (index == activeMenuId ? ' active' : '')}>{link.name}</a>
      ))}
    </nav>
</header>
  );
}

export default Header;
