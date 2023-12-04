// here is my imports 
// I used this component inside the about componet
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';
import { FaCode} from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { useContext } from 'react';
import { themeContext } from '../../App';
import { TimeLineInformation } from './TimlineData';

 export default function TimeLineInfo(){
  let workIconStyle={background:'var(--timeline-circle-dive-color)',with:'50px',height:'50px'};
  const {theme} = useContext(themeContext);
  return(
    <VerticalTimeline lineColor={theme === 'light' ? 'black':'white'}  >
    {
        TimeLineInformation.map((element)=>{
            let isWorkIcon=element.icon === 'Work';
          return(
            // here I used react timeline plugin to make a timline
            <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName=' date_color'
            iconStyle={ workIconStyle}
            // and here according to my condition the icon will be one of these code or bookmark that  
            icon={isWorkIcon ? <FaCode/>: <FaBookmark/>}
            >
            <h5 className='vertical-timeline-element-title '>{element.title}</h5>
            <h6 className='vertical-timeline-element-subtitle about_description_h5'>{element.location} </h6>
            <p id="description" className='about_description'>{element.description}  </p>
            </VerticalTimelineElement>
          )  
        })
    }
  </VerticalTimeline>
  );
 }
