import Photo from './PhotoComponent'
import Content from './ContentComponent'

const Project = ({data, index}) => {
    return (
    
       <div className={'project-item'  + (index % 2 == 0 ? ' reverse' : '' )}>
            <Photo photo={data.photo}/>
            <Content data={data}/> 
        </div>
    );
  }
  
  export default Project;
  