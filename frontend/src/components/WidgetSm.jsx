import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";


export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tom Jay</span>
            <span className="widgetSmUserTitle">San Jose, CA</span>
          </div>
          <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          
            
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">San Jose, CA</span>
          </div>
          <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
            
          </button>
        </li>
        
      </ul>
    </div>
  );
}