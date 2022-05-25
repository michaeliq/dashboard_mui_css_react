import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <h1 className="logo">
          Dash-X
        </h1>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icons"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonIcon className="icons"/>
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className="icons"/>
            <span>Products</span>
          </li>
          <li>
            <PaymentIcon className="icons"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icons"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFULL</p>
          <li>
            <AnalyticsIcon className="icons"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icons"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SummarizeIcon className="icons"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icons"/>
            <span>Settings</span>
          </li>
          <li>
            <HealthAndSafetyIcon className="icons"/>
            <span>System Health</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icons"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icons"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
      </div>
    </div>
  )
}
