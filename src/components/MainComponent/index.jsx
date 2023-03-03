import Promo from './SectionComponents/PromoComponent'
import About from './SectionComponents/AboutComponent'
import Experience from './SectionComponents/ExperienceComponent'
import Projects from './SectionComponents/ProjectsComponent'
import Contacts from './SectionComponents/ContactsComponent'
import { Element } from "react-scroll";
import BackToTopButton from '../BackToTopButtonComponent'

function Main() {
    return ( 
        <main className="main">
                <Element name="promo">
                    <Promo/>
                </Element>

                <Element name="about">
                    <About/>
                </Element>

                <Element name="experience">
                    <Experience/>
                </Element>

                <Element name="projects">
                    <Projects/>
                </Element>

                <Element name="contacts">
                    <Contacts/>
                </Element>
                
                <BackToTopButton/>
                
        </main>  
    );
  }
  
  export default Main;
  