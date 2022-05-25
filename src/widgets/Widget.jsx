import "./widget.scss"
import {
    KeyboardArrowUp,
    KeyboardArrowDown,
    PersonOutline,
    StoreMallDirectoryOutlined,
    MonetizationOnOutlined,
    AccountBalanceWalletOutlined
} from "@mui/icons-material"

export default function Widget(props) {
    const { type } = props
    let data = {}
    const percentage = Math.ceil(Math.random() * 100)
    const counter = Math.ceil((Math.random() * 100) * (Math.random() * 100))
    const user = Math.ceil(Math.random() * 100)
    const order = Math.ceil(Math.random() * 100)

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                link: "See all users on System",
                isMoney: false,
                count:user,
                icon: <PersonOutline
                    className="icons"
                    style={{
                        color: "#fff",
                        backgroundColor: "crimson"
                    }} />
            };
            break
        case "order":
            data = {
                title: "ORDERS",
                link: "See all products on System",
                isMoney: false,
                count:order,
                icon: <StoreMallDirectoryOutlined
                    className="icons"
                    style={{
                        color: "#fff",
                        backgroundColor: "rgb(246, 243, 60)"
                    }} />
            };
            break;
        case "erarning":
            data = {
                title: "ERARNING",
                link: "See net erarning",
                isMoney: true,
                icon: <MonetizationOnOutlined
                    className="icons"
                    style={{
                        color: "#fff",
                        backgroundColor: "green"
                    }} />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                link: "See details",
                isMoney: true,
                icon: <AccountBalanceWalletOutlined
                    className="icons"
                    style={{
                        color: "#fff",
                        backgroundColor: "violet"
                    }} />
            };
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney ? "$" + counter : data.count}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                {percentage < 50 ?
                    <div className="percentage negative">
                        <KeyboardArrowDown/>
                        {percentage}%
                    </div> :
                    <div className="percentage positive">
                        <KeyboardArrowUp/>
                        {percentage}%
                    </div>
                }
                {data.icon}
            </div>
        </div>
    )
}
