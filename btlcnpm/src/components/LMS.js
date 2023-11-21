import "./LMS.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import logoMain from "../image/logo_pts.png"
import logo from "../image/logoR.svg"
import iconPaddy from "../image/icon-paddy.svg"
import avt from "../image/ava_3.png"
import accSet from "../image/account-setting1.png"
import accSet2 from "../image/account-setting2.png"
import accSet5 from "../image/account-setting5.png"
import shape from "../image/shape-myclass.png"
import defaulClass from "../image/default_liveclass.jpeg"
import camera from "../image/camera-myclass.png"
import user1 from "../image/user1-myclass.png"
import user2 from "../image/user2-myclass.png"
import user3 from "../image/user3-myclass.png"
import pdf from "../image/pdf-myclass.png"
const Lms = () => {
    return (
        <>
            <div class="l-page is-user">
                <div class="l-bg-border">
                    <div class="l-nav clearfix">
                        <div class="c-header-left is-2 is-back">
                            <div class="c-logo">                                
                                <Link to="/">
                                    <img alt="auth" src={logo} />
                                </Link>
                            </div>

                            <div class="c-header-title is-back"><span>Lịch học</span>

                            </div>

                            <div>
                                <Link class="button-to-teky"  href="/">
                                    <img class="img-to-teky" src={logoMain}alt=""/>
                                </Link>
                            </div>


                            <button class="c-menu-expand js-menu-expand" type="button"><i class="icon-ico-menu"></i></button>
                        </div>



                        <div class="c-header-setting clearfix">

                            <div class="c-setting">
                                <ul class="clearfix">
                                    <li class="is-money"><a href="/doi-qua/lich-su-thoc-doi-qua/"><span id="total-star">26,400</span><img src={iconPaddy} alt=""/></a></li>
                                </ul>
                            </div>
                            <div class="c-user-setting">

                                <div class="c-user-setting__avatar">
                                    <a class="js-hidden-setting c-border-imgborder" href="/">
                                        <figure>

                                            <img id="usr_avtt" src={avt} title="Megan Bình An Walford"/>

                                        </figure>
                                        <i class="icon-settingss"></i>
                                    </a>
                                    <div style={{height:"auto"}} class="c-user-setting__avatar__dropdown">
                                        <div style={{width: "100%", textAlign: "left", paddingLeft: "10px"}}>
                                            <label style={{fontSize: "16px", fontWeight: "700"}} class="dropdown-label">Quản lý học tập </label>
                                        </div>
                                        <ul class="clearfix">
                                            <li>
                                                <a href="/lop-hoc/">
                                                    <span style={{width: "20px", marginRight: "10px"}} class="icon"><img src="/static/web/v3/img/icon/icon-user-Teky-Logo.svg" alt=""/></span>
                                                    <span style={{color: "#000", fontSize: "16px", fontWeight: "500"}} class="text">Công nghệ &amp; Lập trình</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://toppy.vn/">
                                                    <span style={{width: "20px", marginRight: "10px"}} class="icon"><img src="/static/web/v3/img/icon/icon-user-ToppyLogo.svg" alt=""/></span>
                                                    <span style={{color: "#000", fontSize: "15px", fontWeight: "500"}} class="text">Gia sư K12 &amp; Tự luyện Toán - Lý - Hóa...</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div style={{width: "100%", textAlign: "left", paddingLeft: "10px"}}>
                                            <label style={{fontSize: "16px", fontWeight: "700"}} class="dropdown-label">Quản lý tài khoản </label>
                                        </div>

                                        <ul class="clearfix">
                                            <li>
                                                <a href="/doi-qua/lich-su-thoc-doi-qua/" id="c-user_switch">
                                                    <img style={{width:"22px", minWidth: "16px", marginRight: "10px"}} src={iconPaddy} alt=""/>
                                                        <span style={{fontWeight: "normal", fontSize: "16px", color:" #000", fontWeight: "500"}} class="title">Thóc &amp; quà</span>
                                                        <span style={{fontWize: "14px", color: "#EB9138"}} class="right">26,400</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/choose-student" id="c-user_switch">

                                                    <img style={{width:"22px", minWidth:" 16px", marginRight: "10px"}} src="/static/web/v3/img/icon/icon-user-friend.svg" alt=""/>
                                                        <span style={{fontWeight: "normal", fontSize: "16px",color:" #000", fontWeight: "500"}} class="title">Chuyển tài khoản</span>
                                                        <span class="right">Megan Bình An Walford</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/account-settings" id="user_setting__btn">

                                                    <img style={{width:"22px", minWidth: "16px", marginRight: "10px"}} src="/static/web/v3/img/icon/icon-user-info.svg" alt=""/>
                                                        <span style={{fontWeight: "normal", fontSize: "16px", color: "#000", fontWeight: "500"}} class="title">Cấu hình</span>

                                                </a>
                                            </li>
                                            <li><a href="/s/faq/" target="_blank">

                                                <img style={{width:"22px", minWidth: "16px", marginRight: "10px"}} src="/static/web/v3/img/icon/icon-user-invoice.svg" alt=""/>
                                                    <span style={{fontWeight: "normal", fontSize: "16px", color: "#000", fontWeight: "500"}} class="title">Trợ giúp</span></a></li>
                                            <li id="lms-user-logout"><a href="/logout">

                                                <img style={{width:"22px", minWidth: "16px", marginRight: "10px"}} src="/static/web/v3/img/icon/icons-log-out-v3.png" alt=""/>
                                                    <span style={{fontWeight: "normal", fontSize: "16px", color: "#000", fontWeight: "500"}} class="title">Thoát khỏi hệ thống</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="c-menu-left__top is-top">
                            <ul>
                                <li>
                                    <a href="javascript:void(0);"><i class="icon-menu-four"></i></a>
                                    <div class="c-menu-dropdownright">
                                        <div class="c-menu-dropdownright__title"><span>Chức năng</span></div>
                                        <div class="c-menu-dropdownright__content">


                                            <ul class="clearfix">



                                                <li>
                                                    <div class="c-box-content">
                                                        <a href="/" target="_blank">
                                                            <img src={accSet} alt="Trang chủ"/>
                                                                <span>Trang chủ</span>
                                                        </a>
                                                    </div>
                                                </li>



                                                <li>
                                                    <div class="c-box-content">
                                                        <a href="/khoa-hoc/">
                                                            <img src={accSet2} alt="Khoá học"/>
                                                                <span>Khoá học</span>
                                                        </a>
                                                    </div>
                                                </li>



                                                <li>
                                                    <div class="c-box-content">
                                                        <a href="/du-an/toan-bo-du-an-hoc-vien/">
                                                            <img src={accSet5} alt="Dự án"/>
                                                                <span>Dự án</span>
                                                        </a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="l-height-fixed"></div>
                    <div class="l-content-bg clearfix">


                        <div class="l-sidebar">
                            <div class="c-menu-left">
                                <div class="c-menu-left__top is-top">
                                    <ul>
                                        <li><a href="javascript:void(0);"><i class="icon-menu-four"></i></a>
                                            <div class="c-menu-dropdownright">
                                                <div class="c-menu-dropdownright__title"><span>Chức năng</span></div>
                                                <div class="c-menu-dropdownright__content">


                                                    <ul class="clearfix">



                                                        <li>
                                                            <div class="c-box-content">
                                                                <a href="/" target="_blank">
                                                                    <img src={accSet} alt="Trang chủ"/>
                                                                        <span>Trang chủ</span>
                                                                </a>
                                                            </div>
                                                        </li>



                                                        <li>
                                                            <div class="c-box-content">
                                                                <a href="/khoa-hoc/">
                                                                    <img src={accSet2} alt="Khoá học"/>
                                                                        <span>Khoá học</span>
                                                                </a>
                                                            </div>
                                                        </li>



                                                        <li>
                                                            <div class="c-box-content">
                                                                <a href="/du-an/toan-bo-du-an-hoc-vien/">
                                                                    <img src={accSet5} alt="Dự án"/>
                                                                        <span>Dự án</span>
                                                                </a>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="c-menu-left__top">
                                    <ul>

                                        <li class="menu-lms-left-1 active">
                                            <a href="/lop-hoc/"> <i class="icon-calendar"></i>
                                                <span>Lịch học</span>
                                            </a>
                                        </li>

                                        <li class="menu-lms-left-2 ">
                                            <a href="/luyen-tap/"> <i class="icon-file"></i>
                                                <span>Luyện tập</span>
                                            </a>
                                        </li>

                                        <li class="menu-lms-left-3 ">
                                            <a href="/bai-tap-ve-nha/"> <i class="icon-business-presentation"></i>
                                                <span>Nhắc học</span>
                                            </a>
                                        </li>

                                        <li class="menu-lms-left-4 ">
                                            <a href="/du-an-cua-em/"> <i class="icon-script"></i>
                                                <span>Dự án</span>
                                            </a>
                                        </li>

                                        <li class="menu-lms-left-5 ">
                                            <a href="/bao-cao"> <i class="icon-dots"></i>
                                                <span>Báo cáo</span>
                                            </a>
                                        </li>

                                        <li class="menu-lms-left-6 ">
                                            <a href="/chung-chi/"> <i class="icon-certificate"></i>
                                                <span>Chứng chỉ</span>
                                            </a>
                                        </li>

                                        <li class="menu-lms-left-7 ">
                                            <a href="/khieu-nai/"> <i class="feedback"></i>
                                                <span>Khiếu nại</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div class="c-menu-left__center">
                                    <ul>

                                    </ul>
                                </div>
                            </div>
                        </div>

                       

                        <div class="l-content-right">
                           
                            <div class="c-frames-all">
                                <div class="c-frames-short">
                                    <div class="c-all-frames-left is-delete-pading">
                                        <div class="c-steps-video">




                                            <div class="c-steps-video__top">
                                                <div class="c-title-header">
                                                    <div class="c-title-left">
                                                        <span> <b>Các lớp đang học</b></span><span>Có tổng cộng <b> 2 lớp học</b></span>
                                                    </div>


                                                    <div class="c-title-right">
                                                        <div class="c-info-group is-myclass clearfix">
                                                            <div class="current_filter"></div>
                                                            <div class="dropdown c-dropdown-tools">
                                                                <div class="c-img-tools" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <img src={shape}/>
                                                                </div>
                                                                <div class="c-dropdown-tools__list dropdown-menu overflow-auto " aria-labelledby="dropdownMenuButton" style={{zIndex: "9999"}}>
                                                                    <ul class="clearfix">
                                                                        <li class="clearfix">
                                                                            <div class="c-filter-part">
                                                                                <div class="c-filter-part__label">Thời gian</div>
                                                                                <ul class="c-filter-path__content is-col-2 flex-column row flex-md-row flex-nowrap align-items-center">
                                                                                    <div class="c-filter-path__item">
                                                                                        <input type="text" class="filter date_filter date_start" id="datepicker" placeholder="dd/mm/yyyy" value="12/11/2023"/>
                                                                                    </div>
                                                                                    -
                                                                                    <div class="c-filter-path__item">
                                                                                        <input type="text" class="filter date_filter date_end" id="datepicker1" placeholder="dd/mm/yyyy"/>
                                                                                    </div>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        <li class="clearfix">
                                                                            <div class="c-filter-part">
                                                                                <div class="c-filter-part__label">Trạng thái</div>
                                                                                <ul class="is-col-2">
                                                                                    <li>
                                                                                        <label>
                                                                                            <input id="status_1" class="form-check-input filter status_filter" type="checkbox" name="status" value="1"/>
                                                                                                Đã đăng ký
                                                                                        </label>
                                                                                    </li>
                                                                                    <li>
                                                                                        <label>
                                                                                            <input id="status_0" class="form-check-input filter status_filter" type="checkbox" name="status" value="0"/>
                                                                                                Chưa đăng ký
                                                                                        </label>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="c-textlink-next">
                                                                <a href="/lop-hoc/lop-hoc-thu-mien-phi/">
                                                                    <span>Xem toàn bộ</span>
                                                                    <i class="ico-next-myclass"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="c-steps-video__slider">
                                                <div class="l-myclass-sliderright">
                                                    <ul class="owl-carousel js-free-class owl-loaded owl-drag">

                                                        <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "3754px"}}><div class="owl-item active" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3163" data-course="874" data-is_joined="0" data-time="today" data-start_date="12/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/pham-ngoc-kien-67d49d6a-6bb5-4cf2-b8ff-ddc6c293c100/" data-class-id="3163">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2023_08_02_teacher_8636.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Phạm Ngọc Kiên</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3163/" target="_blank" data-class-id="3163">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Chủ nhật 12/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    60 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-12 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>Học phần 5 - 3D PRINTING &amp; MODELLING, TINKERCAD</span>
                                                                    <span>CÂY NẤM SẶC SỠ</span>

                                                                    <span class="start_time" style={{color: "#EF4B4B" , fontWeight: "700"}} data="start_time" id="start_time_3163">Chủ nhật, 12/11/2023, 17:00 - 18:00</span>

                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src={user1}/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src={user2}/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src={user3}/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+29</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3163 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3163" data-session_name="CÂY NẤM SẶC SỠ" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3163" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3163/" target="_blank"> </a>
                                                        </li></div><div class="owl-item active" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3178" data-course="868" data-is_joined="0" data-time="today" data-start_date="12/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/ho-huu-loc-36c5d814-3706-491a-87ca-21e29b2b393a/" data-class-id="3178">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2023_09_22_teacher_8819.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Hồ Hữu Lộc</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3178/" target="_blank" data-class-id="3178">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>19:00,
                                                                    Chủ nhật 12/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    60 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-12 19:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>[2020] Siêu nhân làm game - Level 1</span>
                                                                    <span>Ý TƯỞNG CUỐI KHÓA</span>

                                                                    <span class="start_time" data="start_time" id="start_time_3178" style = {{color: "#EF4B4B", fontWeight: "700"}}>Chỉ còn: <b style={{fontWeight: "500"}}>23:15:50</b></span>

                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src={user1}/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src={user2}/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src={user3}/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+39</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3178 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3178" data-session_name="Ý TƯỞNG CUỐI KHÓA" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3178" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3178/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3179" data-course="868" data-is_joined="0" data-time="today" data-start_date="12/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/ho-huu-loc-36c5d814-3706-491a-87ca-21e29b2b393a/" data-class-id="3179">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2023_09_22_teacher_8819.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Hồ Hữu Lộc</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3179/" target="_blank" data-class-id="3179">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>20:00,
                                                                    Chủ nhật 12/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    60 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-12 20:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>[2020] Siêu nhân làm game - Level 1</span>
                                                                    <span>LẬP TRÌNH DƯ ÁN CUỐI KHÓA</span>
                                                                    <span class="start_time"  data="start_time" id="start_time_3179" style={{color: "#EF4B4B !important", fontWeight: "700"}}>Chỉ còn: <b style={{fontWeight: "500"}}>23:15:50</b></span>
                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+6</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3179 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3179" data-session_name="LẬP TRÌNH DƯ ÁN CUỐI KHÓA" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3179" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3179/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3045" data-course="1842" data-is_joined="0" data-time="over_time" data-start_date="13/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/nguyen-van-binh-8d687287-a1b4-4f6d-b859-be0e16cfe670/" data-class-id="3045">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2023_06_02_teacher_8290.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Nguyễn Văn Bình</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3045/" target="_blank" data-class-id="3045">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Thứ 2 13/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    30 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-13 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>HỌC BÙ HP1 - 3</span>
                                                                    <span>Buổi 1</span>

                                                                    <span class="start_time"  data="start_time" id="start_time_3045" style={{color: "#EF4B4B !important", fontWeight: "700"}}>Chỉ còn: <b style={{fontWeight: "500"}}>23:15:50</b></span>

                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+76</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3045 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3045" data-session_name="Buổi 1" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3045" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3045/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3037" data-course="1842" data-is_joined="0" data-time="over_time" data-start_date="13/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/nguyen-thao-ngoc-bfef1f47-1056-4cce-b6fb-4851423534a4/" data-class-id="3037">

                                                                    <img src="/static/lms/upload/user-none.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Nguyễn Thảo Ngọc</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3037/" target="_blank" data-class-id="3037">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Thứ 2 13/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    30 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-13 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>HỌC BÙ HP1 - 3</span>
                                                                    <span>Buổi 1</span>

                                                                    <span class="start_time"  data="start_time" id="start_time_3037" style={{color: "#EF4B4B !important", fontWeight: "700"}}>Chỉ còn: <b style={{fontWeight: "500"}}>23:15:50</b></span>

                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+48</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3037 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3037" data-session_name="Buổi 1" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3037" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3037/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_2265" data-course="867" data-is_joined="0" data-time="over_time" data-start_date="13/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/nguyen-thi-thu-huong-9a305c48-b617-4853-8365-44b02b69e61e/" data-class-id="2265">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2022_04_29_teacher_1434.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Nguyễn Thị Thu Hương</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/2265/" target="_blank" data-class-id="2265">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Thứ 2 13/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    120 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-13 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>Học phần 11 - LẬP TRÌNH AR/VR VỚI COSPACES</span>
                                                                    <span>THẾ GIỚI LA MÃ CỔ ĐẠI TRONG MERGE CUBE</span>

                                                                    <span class="start_time"  data="start_time" id="start_time_2265" style={{color: "#EF4B4B !important", fontWeight: "700"}}>Chỉ còn: <b style={{fontWeight: "500"}}>23:15:50</b></span>

                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+31</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_2265 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="2265" data-session_name="THẾ GIỚI LA MÃ CỔ ĐẠI TRONG MERGE CUBE" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_2265" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/2265/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3167" data-course="1842" data-is_joined="0" data-time="over_time" data-start_date="15/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/bui-thi-thanh-thao-74379fb3-674b-4ec8-8d06-b7a8ac4e4b98/" data-class-id="3167">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2022_10_11_teacher_7601.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Bùi Thị Thanh Thảo</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3167/" target="_blank" data-class-id="3167">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Thứ 4 15/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    30 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-15 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>HỌC BÙ HP4 - 6</span>
                                                                    <span>Buổi 1</span>

                                                                    <span class="start_time" style={{    color: "#EF4B4B !important" , fontWeight: "700"}} data="start_time" id="start_time_3167">Thứ 4, 15/11/2023, 17:00 - 17:30</span>

                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+8</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3167 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3167" data-session_name="Buổi 1" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3167" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3167/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3090" data-course="1842" data-is_joined="0" data-time="over_time" data-start_date="16/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/nguyen-phu-trong-41363643-b5d7-4443-8ceb-a12a3f5485b2/" data-class-id="3090">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2023_04_19_teacher_8117.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Nguyễn Phú Trọng</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3090/" target="_blank" data-class-id="3090">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Thứ 5 16/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    30 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-16 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>HỌC BÙ HP1 - 3</span>
                                                                    <span>Buổi 1</span>

                                                                    <span class="start_time" style={{    color: "#EF4B4B !important" , fontWeight: "700"}} data="start_time" id="start_time_3090">Thứ 5, 16/11/2023, 17:00 - 17:30</span>

                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+16</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3090 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3090" data-session_name="Buổi 1" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3090" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3090/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_2989" data-course="1842" data-is_joined="0" data-time="over_time" data-start_date="17/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/huynh-pham-to-ngan-445357da-eaac-4623-9a64-7c1922386468/" data-class-id="2989">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2022_12_19_teacher_7828.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Huỳnh Phạm Tố Ngân</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/2989/" target="_blank" data-class-id="2989">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Thứ 6 17/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    30 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-17 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>HỌC BÙ HP1 - 3</span>
                                                                    <span>Buổi 1</span>

                                                                    <span class="start_time" style={{    color: "#EF4B4B !important" , fontWeight: "700"}} data="start_time" id="start_time_2989">Thứ 6, 17/11/2023, 17:00 - 17:30</span>
                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+8</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_2989 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="2989" data-session_name="Buổi 1" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_2989" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/2989/" target="_blank"> </a>
                                                        </li></div><div class="owl-item" style={{width: "355.334px", marginRight: "20px"}}><li class="free_class_item" id="free_class_3003" data-course="1842" data-is_joined="0" data-time="over_time" data-start_date="17/11/2023">
                                                            <div class="c-step-happennings">
                                                                <a class="c-border-imgborder" href="/v2/giao-vien/nguyen-phu-trong-41363643-b5d7-4443-8ceb-a12a3f5485b2/" data-class-id="3003">

                                                                    <img src=" https://sgp1.digitaloceanspaces.com/teky-prod/images/teachers/2023_04_19_teacher_8117.png"/>

                                                                </a>
                                                                <div class="c-text-name">
                                                                    <span>Giảng viên</span>
                                                                    <span>Nguyễn Phú Trọng</span>
                                                                </div>
                                                            </div>
                                                            <div class="c-video-step">
                                                                <a href="/v2/buoi-hoc-live/3003/" target="_blank" data-class-id="3003">
                                                                    <figure>

                                                                        <img src={defaulClass}/>

                                                                            <div class="c-img-camera">
                                                                                <img src={camera}/>
                                                                            </div>
                                                                    </figure>
                                                                </a>
                                                                <div class="c-textinfo-happennings"><span>17:00,
                                                                    Thứ 6 17/11/2023 &nbsp;&nbsp;|&nbsp;&nbsp;
                                                                    30 phút</span></div>
                                                            </div>
                                                            <div class="c-step-happennings is-info-slider free_class_info" data-start_time="2023-11-17 17:00:00">

                                                                <a class="c-text-name is-text-info ">
                                                                    <span>HỌC BÙ HP1 - 3</span>
                                                                    <span>Buổi 1</span>

                                                                    <span class="start_time" style={{    color: "#EF4B4B !important" , fontWeight: "700"}} data="start_time" id="start_time_3003">Thứ 6, 17/11/2023, 17:00 - 17:30</span>
                                                                </a>
                                                            </div>
                                                            <div class="c-group-user">
                                                                <div class="is-user-myclass">
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user1-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user2-myclass.png"/>
                                                                    </a>
                                                                    <a class="c-border-imgborder" href="javascript:void(0)">
                                                                        <img src="/static/lms/upload/user3-myclass.png"/>
                                                                    </a>
                                                                </div>
                                                                <div class="c-amount-user"><span>+44</span></div>


                                                                <a class="c-btnlogin-myclass is-learn-try is_learn_try_3003 justify-content-around" href="javascript:void(0)" data-toggle="modal" data-target="#modalRegisterOnline" data-session_id="3003" data-session_name="Buổi 1" data-form_target="mautic_and_odoo">
                                                                    <span>Đăng ký học</span><span>+</span>
                                                                </a>
                                                                <a class="c-btnlogin-myclass is-loading t-center hover-disabled registed_free_class_3003" style={{display: "none"}}>
                                                                    <span class="text-light">Đã đăng ký</span>
                                                                </a>


                                                            </div>
                                                            <a class="c-step-link" href="/v2/buoi-hoc-live/3003/" target="_blank"> </a>
                                                        </li></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></ul>
                                                </div>
                                            </div></div>
                                    </div>
          
                                    <div class="c-all-frames-calendar">
                                        <div class="c-mycourses">
                                            <div class="c-calendar-schedules">
                                                <div class="c-calendar-schedules__title">
                                                    <div class="c-calendar-schedules__title__left">
                                                        <span>Lịch của tôi</span>
                                                    </div>
                                                    <div class="c-calendar-schedules__title__right">
                                                        <button class="btn btn-primary" id="calendar-today">Hôm nay</button>
                                                        <div class="l-calendar-month">

                                                            <ul class="clearfix">
                                                                <li class="is-1">
                                                                    <select class="is-myclass js-select-mini select2-hidden-accessible" name="calendar_month_filter" data-bind="options: months, optionsText: 'monthName', optionsValue: 'monthValue', value: select_month," tabindex="-1" aria-hidden="true" data-select2-id="select2-data-27-v923"><option value="0">Tháng 1</option><option value="1">Tháng 2</option><option value="2">Tháng 3</option><option value="3">Tháng 4</option><option value="4">Tháng 5</option><option value="5">Tháng 6</option><option value="6">Tháng 7</option><option value="7">Tháng 8</option><option value="8">Tháng 9</option><option value="9">Tháng 10</option><option value="10" data-select2-id="select2-data-29-keyv">Tháng 11</option><option value="11">Tháng 12</option>
                                                                    </select><span class="select2 select2-container select2-container--bootstrap4" dir="ltr" data-select2-id="select2-data-28-zofw" style={{width: "82.6667px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-calendar_month_filter-4w-container" aria-controls="select2-calendar_month_filter-4w-container"><span class="select2-selection__rendered" id="select2-calendar_month_filter-4w-container" role="textbox" aria-readonly="true" title="Tháng 11">Tháng 11</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                </li>
                                                                <li class="is-2">
                                                                    <select class="is-myclass js-select-mini select2-hidden-accessible" name="calendar_year_filter" data-bind="options: years, optionsText: 'yearName', optionsValue: 'yearValue', value: select_year," tabindex="-1" aria-hidden="true" data-select2-id="select2-data-47-upjv"><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023" data-select2-id="select2-data-49-v37q">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option>
                                                                    </select><span class="select2 select2-container select2-container--bootstrap4" dir="ltr" data-select2-id="select2-data-48-1ahd" style={{width: "56px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-calendar_year_filter-mf-container" aria-controls="select2-calendar_year_filter-mf-container"><span class="select2-selection__rendered" id="select2-calendar_year_filter-mf-container" role="textbox" aria-readonly="true" title="2023">2023</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-calendar-schedules__calendar">
                                                    <div class="c-group-calendar is-schedules-slider">
                                                        <ul class="clearfix owl-carousel owl-loaded owl-drag" data-bind="template: { name: 'day-of-month-calendar-template', foreach: days }">
                                                            <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(-584px, 0px, 0px)", transition: "all 0s ease 0s", width: "2504px"}}><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">1</span>
                                                                <span data-bind="text: dayOfWeek">Thứ tư</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">2</span>
                                                                <span data-bind="text: dayOfWeek">Thứ năm</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">3</span>
                                                                <span data-bind="text: dayOfWeek">Thứ sáu</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">4</span>
                                                                <span data-bind="text: dayOfWeek">Thứ bảy</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date" class="is-sunday">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">5</span>
                                                                <span data-bind="text: dayOfWeek">Chủ nhật</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)">
                                                                    <i class="icon-oval-calendar1"></i>
                                                                </div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">6</span>
                                                                <span data-bind="text: dayOfWeek">Thứ hai</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">7</span>
                                                                <span data-bind="text: dayOfWeek">Thứ ba</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">8</span>
                                                                <span data-bind="text: dayOfWeek">Thứ tư</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">9</span>
                                                                <span data-bind="text: dayOfWeek">Thứ năm</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">10</span>
                                                                <span data-bind="text: dayOfWeek">Thứ sáu</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">11</span>
                                                                <span data-bind="text: dayOfWeek">Thứ bảy</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date" class="is-sunday is-today is-watching">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name">Đang xem</span>
                                                                <span data-bind="text: date">12</span>
                                                                <span data-bind="text: dayOfWeek">Chủ nhật</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)">
                                                                    <i class="icon-oval-calendar1"></i>
                                                                </div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">13</span>
                                                                <span data-bind="text: dayOfWeek">Thứ hai</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">14</span>
                                                                <span data-bind="text: dayOfWeek">Thứ ba</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item active" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">15</span>
                                                                <span data-bind="text: dayOfWeek">Thứ tư</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">16</span>
                                                                <span data-bind="text: dayOfWeek">Thứ năm</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">17</span>
                                                                <span data-bind="text: dayOfWeek">Thứ sáu</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">18</span>
                                                                <span data-bind="text: dayOfWeek">Thứ bảy</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date" class="is-sunday">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">19</span>
                                                                <span data-bind="text: dayOfWeek">Chủ nhật</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)">
                                                                    <i class="icon-oval-calendar1"></i>
                                                                </div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">20</span>
                                                                <span data-bind="text: dayOfWeek">Thứ hai</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">21</span>
                                                                <span data-bind="text: dayOfWeek">Thứ ba</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">22</span>
                                                                <span data-bind="text: dayOfWeek">Thứ tư</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">23</span>
                                                                <span data-bind="text: dayOfWeek">Thứ năm</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">24</span>
                                                                <span data-bind="text: dayOfWeek">Thứ sáu</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">25</span>
                                                                <span data-bind="text: dayOfWeek">Thứ bảy</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date" class="is-sunday">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">26</span>
                                                                <span data-bind="text: dayOfWeek">Chủ nhật</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">27</span>
                                                                <span data-bind="text: dayOfWeek">Thứ hai</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">28</span>
                                                                <span data-bind="text: dayOfWeek">Thứ ba</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">29</span>
                                                                <span data-bind="text: dayOfWeek">Thứ tư</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div><div class="owl-item" style={{width:" 68.458px", marginRight: "15px"}}><li data-bind="css: $parent.checkSelectedDate($data).css, click: $parent.selected_date">
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date">30</span>
                                                                <span data-bind="text: dayOfWeek">Thứ năm</span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)"></div>
                                                            </li></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></ul>
                                                        <script type="text/html" id="day-of-month-calendar-template">
                                                            <li data-bind='css: $parent.checkSelectedDate($data).css, click: $parent.selected_date'>
                                                                <span data-bind="text: $parent.checkSelectedDate($data).name"></span>
                                                                <span data-bind="text: date"></span>
                                                                <span data-bind="text: dayOfWeek"></span>
                                                                <div class="c-icon-schedules" data-bind="foreach: $parent.eventsOfSelectedDate($data)">
                                                                    <i class="icon-oval-calendar1"></i>
                                                                </div>
                                                            </li>
                                                        </script>
                                                    </div>
                                                </div>
                                                <div class="c-watching-schedules">
                                                    <div class="c-watching-schedules__title">
                                                        <span>Đang xem: </span>
                                                        <span data-bind="text: displaySelectedDate">Chủ nhật, 12/11/2023</span>
                                                        <span></span>
                                                        <span>Có tổng cộng <span style={{fontWeight: "600"}} data-bind="text: totalEventsOnThisDay">1</span> lịch</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                             
                                </div>
                                <div class="c-overlay-right js-app-ovelay-right"></div>
                                <div class="c-frames-right is-myclass-right is-hidden-mb">
                                    <div class="c-frames-right-close">
                                        <div class="is-close"><i class="close-white"></i></div>
                                    </div>
                                    <div class="c-group-box clearfix statistical">



                                        <a class="c-box-right c-box-1" href="/static/files/noi-qui-lop-hoc.pdf" target="_blank">
                                            <p>Xem nội quy<br/>lớp học</p>
                                            <div class="c-pdf-myclass">
                                                <img src={pdf}/>
                                            </div>
                                        </a><a class="c-box-right c-box-2" href="#all-my-course">
                                            <p>Khoá học<br/>của tôi</p>
                                            <p class="c-number">2</p>
                                        </a><a class="c-box-right c-box-3" href="/bai-tap-ve-nha/">
                                            <p>Bài tập<br/>cần hoàn thành</p>
                                            <p class="c-number"><span>-46/</span><span>0</span></p>
                                        </a><a class="c-box-right c-box-4" href="/profile/megan-binh-an-walford-161709">
                                            <p>Thành tích<br/>đạt được</p>
                                            <p class="c-number">0</p>
                                        </a></div>





                                    <div class="c-list-star">
                                        <div class="c-title-star">
                                            <span>Ngôi sao của TEKY</span><span>Top nhưng học viên chăm, giỏi</span>
                                        </div>
                                        <div class="c-user-star">
                                            <ul class="clearfix">


                                                <li>
                                                    <a class="c-border-imgborder" href="/profile/bui-thu-trang-282687">

                                                        <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trangbt-2023-09-12.png" alt="avatar"/>

                                                    </a>
                                                    <div class="c-name-user">

                                                        <span style={{font: "size 14px", fontWeight: "800"}}>

                                                            trangbt

                                                        </span>
                                                    </div>
                                                    <div class="c-point-coin is-first">
                                                        <img src={iconPaddy} alt=""/><span>574,400</span>
                                                    </div>
                                                </li>



                                                <li>
                                                    <a class="c-border-imgborder" href="/profile/nguyen-ngoc-minh-trang-283541">

                                                        <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trangnnm-2023-09-12.png" alt="avatar"/>

                                                    </a>
                                                    <div class="c-name-user">

                                                        <span style={{font: "size 14px", fontWeight: "800"}}>

                                                            ChengGD

                                                        </span>
                                                    </div>
                                                    <div class="c-point-coin is-first">
                                                        <img src={iconPaddy} alt=""/><span>543,600</span>
                                                    </div>
                                                </li>



                                                <li>
                                                    <a class="c-border-imgborder" href="/profile/nguyen-thuy-linh-282369">

                                                        <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/linhnt-2023-10-26.png" alt="avatar"/>

                                                    </a>
                                                    <div class="c-name-user">

                                                        <span style={{font: "size 14px", fontWeight: "800"}}>

                                                            Nguyễn Thùy Linh

                                                        </span>
                                                    </div>
                                                    <div class="c-point-coin is-first">
                                                        <img src={iconPaddy} alt=""/><span>504,900</span>
                                                    </div>
                                                </li>



                                                <li>
                                                    <a class="c-border-imgborder" href="/profile/tran-sy-phu-268991">

                                                        <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/default/avatar-default_15.png" alt="avatar"/>

                                                    </a>
                                                    <div class="c-name-user">

                                                        <span style={{font: "size 14px", fontWeight: "800"}}>

                                                            Trần Sỹ Phú

                                                        </span>
                                                    </div>
                                                    <div class="c-point-coin is-first">
                                                        <img src={iconPaddy} alt=""/><span>473,100</span>
                                                    </div>
                                                </li>



                                                <li>
                                                    <a class="c-border-imgborder" href="/profile/le-hoang-son-283537">

                                                        <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/sonlh-2023-09-12.png" alt="avatar"/>

                                                    </a>
                                                    <div class="c-name-user">

                                                        <span style={{font: "size 14px", fontWeight: "800"}}>

                                                            Sơn Alex

                                                        </span>
                                                    </div>
                                                    <div class="c-point-coin is-first">
                                                        <img src={iconPaddy} alt=""/><span>465,400</span>
                                                    </div>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script src="/static/lms/js/custom_js/classes_v2.js"></script>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Lms