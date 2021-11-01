// import "./widgetSmThree.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmThree() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Time Out</span>
      <ul className="widgetSmList">
        
       
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4236828/pexels-photo-4236828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Perla Bonh</span>
            <span className="widgetSmUserTitle">Bronx, NY</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            
          </button>
        </li>
      </ul>
    </div>
  );
}