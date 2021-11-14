import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useStateValue } from '../utils/StateProvider';

const submitHandle = e => {
    e.preventDefault()
    window.location.replace(`https://www.empowerteen.org/testimonials/`)
};

const eventHandle = e => {
    e.preventDefault()
    window.location.replace(`https://www.empowerteen.org/testimonials/`)
};



export const SidebarData2 = [
    {
        title: "Current Environments",
        icon: <HomeIcon />,
        link: "#",
        iconClosed: <KeyboardArrowDownIcon/>,
        iconOpened: <KeyboardArrowUpIcon/>,
        subNav:[],
    
    },
    {
        title: "Past Environments",
        icon: <RestoreIcon />,
        link: "#",
        iconClosed: <KeyboardArrowDownIcon/>,
        iconOpened: <KeyboardArrowUpIcon/>,
        subNav: [],
    
    },
    {
        title: <div className="Linksidebar"><a href="https://www.empowerteen.org/testimonials/"  style={{color:'#594F4E'}} onClick={eventHandle}>Event</a></div>,
        icon: <CalendarTodayIcon />,
        link: "#",
    },
    {
        title: <div><a href="https://www.empowerteen.org/testimonials/" style={{color:'#594F4E'}} onClick={submitHandle}>Leave a testomonial</a></div>,
        icon: <SpeakerNotesIcon />,
        link: "#",
    },
    {
        title: "Ask Paula",
        icon: <LiveHelpIcon/>,
        link: "/contact"
    },

    {
        title: "Manage Environments",
        icon:<ManageSearchIcon/>,
        link: "/manageenvironments"
    },
    {
        title: "Manage Members",
        icon:<ManageAccountsIcon/>,
        link: "/members"
    }
    
];


