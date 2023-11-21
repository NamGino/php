import logo from "../image/logo.svg"
import support from "../image/icon-spported.svg"
import logo2 from "../image/logo2.svg"
import codekitten from "../image/icon-code-kitten.svg"
import kittenjr from "../image/icon-kitten-jr.svg"
import gv from "../image/icon-gv.svg"
import iconMenu from "../image/icon-menu-ctg.svg"
import game from "../image/icon-ctg-game.svg"
import learn from "../image/icon-ctg-learn.svg"
import listcode from "../image/icon-ctg-code.svg"
import community from "../image/icon-ctg-community.svg"
import gift from "../image/icon-ctg-gift.svg"
import push from "../image/icon-plus.svg" 
import {Link} from 'react-router-dom'
import "./header.css"
const Header = () => {
    return (
        <>
            <header id="header" className="d-block w-100">
                <div className="header_top bg-while d-flex justify-content-between align-items-center">
                    <a className="logo text-dark text-decoration-none" href="/">
                        <img src={logo} alt="" />
                    </a>
                    <div className="header_Control d-flex ustify-content-center align-items-center">
                        <div className="dropdown header_support d-flex align-items-center">
                            <span className="dropdown-icon d-flex text-align-center" data-toggle="dropdown" aria-expanded="fales">
                                <img src={support} alt="" />
                            </span>
                            <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{
                                position: "absolute", transform: "translate3d(-184px,38px,0px)", top: "0px", left: "0px", willChange: "transform"
                            }}>
                                <a class="dropdown-item text-dark text-decoration-none" href="">Trợ giúp</a>
                                <a class="dropdown-item text-dark text-decoration-none" href="">Khiếu nại &amp; Thắc mắc</a>
                            </div>
                        </div>
                        <div className="dropdown header_hot">
                            <span className="dropdown-icon">
                                <a className="text-dark text-decoration-none" href="">
                                    <span class="phone_number">1900 3168</span>
                                </a>
                            </span>
                        </div>
                        <div className="dropdown header_tool pe-2">
                            <span className="dropdown-icon" data-toggle="dropdown" aria-expanded="fales">
                                <img src={logo2} alt="" />
                            </span>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item" target="_blank">
                                    <span className="icon">
                                        <img src={codekitten} alt="" />
                                    </span>
                                    <span className="text">
                                        Công cụ lập trình
                                        <strong>Codekitten</strong>
                                    </span>
                                </a>
                                <a href="#" className="dropdown-item" target="_blank">
                                    <span className="icon">
                                        <img src={kittenjr} alt="" />
                                    </span>
                                    <span className="text">
                                        App lập trình
                                        <strong>KittenJr</strong>
                                    </span>
                                </a>
                                <a href="#" className="dropdown-item" target="_blank">
                                    <span className="icon">
                                        <img src={gv} alt="" />
                                    </span>
                                    <span className="text">
                                        TEKY
                                        <strong>Giảng viên</strong>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="switch-user d-flex">
                        <li><a className="active text-decoration-none text-light" href="/">Học sinh</a></li>
                        <li><a className="text-decoration-none" href="/phu-huynh/">Phụ huynh</a></li>
                        <li>
                            <div className="dropdown">
                                <a className="text-decoration-none" data-toggle="dropdown" href="#">Lộ trình học</a>
                                <div className="dropdown-menu-learn-path dropdown-menu dropdown-menu-left" x-placement="bottom-start"
                                    style={{
                                        position: "absolute", transform: "translate3d(0px,44px,0px)", top: "0px", left: "0px", willChange: "transform"
                                    }}
                                >
                                    <a className="dropdown-item text-decoration-none text-decoration-none" href="https://lotrinhrobotics.teky.vn" target="_blank">
                                        <span className="icon"><img src="/static/web/v3/img/icon/icon-ctg-community.svg" alt="" /></span>
                                        <span className="text">Lộ trình Robotics</span>
                                    </a>
                                    <a className="dropdown-item text-decoration-none text-decoration-none" href="https://lotrinhlaptrinh.teky.vn/" target="_blank">
                                        <span className="icon"><img src="/static/web/v3/img/icon/icon-ctg-community.svg" alt="" /></span>
                                        <span className="text">Lộ trình lập trình</span>
                                    </a>
                                    <a className="dropdown-item text-decoration-none text-decoration-none" href="https://cuocthi.teky.vn/" target="_blank">
                                        <span className="icon"><img src="/static/web/v3/img/icon/icon-ctg-community.svg" alt="" /></span>
                                        <span className="text">Luyện thi giải</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="header_menu">
                    <div className="dropdown headerMenu_list show">
                        <button className="button_menu" data-toggole="dropdown" aria-expanded="false">
                            <img src={iconMenu} alt="" />
                            <span className="list_lable"> Danh mục</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-left" x-placement="bottom-start" style={{ position: "absolute", transform: "translate3d(5px, 70px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
                            <a className="dropdown-item active" href="/">
                                <span className="icon"><img src={game} alt="" /></span>
                                <span className="text">Chơi &amp; Xem</span>
                            </a>
                            <a className="dropdown-item " href="/hoc/">
                                <span className="icon"><img src={learn} alt="" /></span>
                                <span className="text">Học</span>
                            </a>
                            <a className="dropdown-item " href="/lam-game/">
                                <span className="icon"><img src={listcode} alt="" /></span>
                                <span className="text">Làm Game/dự án</span>
                            </a>
                            <a className="dropdown-item " href="/cong-dong/">
                                <span className="icon"><img src={community} alt="" /></span>
                                <span className="text">Cộng đồng</span>
                            </a>
                            <a className="dropdown-item " href="/doi-qua/">
                                <span className="icon"><img src={gift} alt="" /></span>
                                <span className="text">Đổi quà</span>
                            </a>
                        </div>
                    </div>
                    <div className="headerMenu_control">
                        <button className="btn_upload">
                            <a href="" className="text-decoration-none text-dark">
                                <lable className="file_upload">
                                    <img src={push} alt="" />
                                    <span className="lable_upload"> Tải lên</span>
                                </lable>
                            </a>
                        </button>
                        <Link to="/Login" className="btn btn_cmn btn_login">
                            <span> Đăng nhập </span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;