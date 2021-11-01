// import "./widgetSmTwo.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetTwo() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Recently Added</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Maria Keller</span>
            <span className="widgetSmUserTitle">San Diego, CA</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marry Kim</span>
            <span className="widgetSmUserTitle">Oakland, CA</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Alex More</span>
            <span className="widgetSmUserTitle">Fremont, CA</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4542178/pexels-photo-4542178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nancy Tay</span>
            <span className="widgetSmUserTitle">Fulton,CA</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Karla Mel</span>
            <span className="widgetSmUserTitle">Manteca, CA</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            
          </button>
        </li>
      </ul>
    </div>
  );
}