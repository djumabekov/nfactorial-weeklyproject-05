const Content = ({data}) => {

    return (
       <>
        <div className="project-info">
            <div className="project-info-title">
                <div className="project-info-title-maintext">
                    {data.name}
                </div>
                <div className="project-info-title-description">
                    {data.description}
                </div>
            </div>
            <div className="project-info-info">
                <ul className="project-info-info-list">
                    {data.projectItems.map((item, index) => (
                        <li key={index} className="project-info-info-list-item">
                        <div className="project-info-info-list-item-point">
                        </div>
                        {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
</>
    );
  }
  
  export default Content;
  