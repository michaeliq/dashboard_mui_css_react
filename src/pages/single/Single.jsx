import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { MoreHorizOutlined } from '@mui/icons-material'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="title">
              Información
            </div>
            <div className="editButton">
              <MoreHorizOutlined color="white" />
            </div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="avatar"
                className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  Jane Doe
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@mail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Teléfono: </span>
                  <span className="itemValue">+57 310 102 3648</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Dirección: </span>
                  <span className="itemValue">Cundinamarca Bógota</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Estado: </span>
                  <span className="itemValue">Activo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Valor facturado en los últimos 6 meses" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            Últimos Radicados en Sistema
          </div>
          <List />
        </div>
      </div>
    </div>
  )
}
