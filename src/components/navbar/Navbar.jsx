import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { DarkModeOutlined } from '@mui/icons-material';
import { FullscreenExitOutlined } from '@mui/icons-material';
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { ListOutlined } from '@mui/icons-material';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='...search' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon className="icons"/>English
          </div>
          <div className="item">
          <DarkModeOutlined className="icons"/>
          </div>
          <div className="item">
          <FullscreenExitOutlined className="icons"/>
          </div>
          <div className="item">
          <NotificationsNoneOutlined className="icons"/>
          <div className="counter">2</div>
          </div>
          <div className="item">
          <ChatBubbleOutlineOutlined className="icons"/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ListOutlined className="icons"/>
          </div>
          <div className="item">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
          alt="user profile"
          className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}
