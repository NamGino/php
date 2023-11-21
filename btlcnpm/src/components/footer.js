import "./footer.css"
import logo from "../image/logo.svg"
import logoKitten from "../image/logo-KittenJr2.svg"
import logoCode from "../image/logo-CodeKitten.svg"
import toppy from "../image/logo-TOPPY.svg"
import tutoro from "../image/logo-TutorO.svg"
import send from "../image/icon-send.svg"
import checkTB from "../image/icon-check-TB.png"
import zalo from "../image/social-zalo.svg"
import fb from "../image/social-face.svg"
import tt from "../image/social-tiktok.svg"
import yt from "../image/social-youtube.svg"
import phone from "../image/icon-phone-2.svg"
import mail from "../image/icon-mail.svg"
import location from "../image/icon-location.svg"
import office from "../image/icon-office.svg"
const Footer = () => {
    return(
        <>
        <footer id="footer">
    <div class="f-col-1">
        <div>
            <div class="d-flex align-items-center">
                <div class="f-logo"><img src={logo} alt=""/></div>
                <ul class="list-linked">
                    <li><a href="https://toppy.vn/"><img src={toppy} alt=""/></a></li>
                    <li><a href="https://codekitten.vn/"><img src={logoCode} alt=""/></a></li>
                    <li><a href="https://www.kittenjr.vn/"><img src={logoKitten} alt=""/></a></li>
                    <li><a href="https://tutoro.vn/"><img src={tutoro} alt=""/></a></li>
                </ul>
            </div>
            <p class="text-infor">TEKY là Học viện sáng tạo công nghệ với chương trình giảng dạy <strong>STEAM (Science
                – Technology – Engineering – Art – Mathematics)</strong> theo chuẩn Mỹ đầu tiên tại Việt Nam dành cho
                trẻ em từ 4 đến 18 tuổi.</p>
        </div>
        <div>
            <form class="input-group" action="/advise/email" id="advisory_subscribe_email_v3" method="POST" novalidate="novalidate">
                <input type="hidden" name="csrfmiddlewaretoken" value="wJCN21wcyXxZg5QWPo9pxhl65HRxEmy73geK4p3qrGW9qZSAOSbjUpQFYyArffs7"/>
                <div class="c-alert alert-success hidden" id="success_message" style={{display:"none"}}></div>
                <div class="form-register">
                    <div class="form-text">
                        <label class="register-label">Đăng ký nhận tin</label>
                        <input class="form-input" type="email" name="email" placeholder="nhập email để nhận thông tin khuyến mại, cuộc thi..."/>
                        <input type="hidden" name="tags" value="https://teky.edu.vn/"/>
                    </div>
                    <button type="submit" class="button-register"><img src={send} alt=""/></button>
                </div>
            </form>
       
            <div class="f-social">
                <div class="check-tb"><img src={checkTB} alt=""/></div>
                <ul class="social-list">
                    <li><a href="https://zalo.me/502206421677206484" target="_blank"><img src={zalo} alt=""/></a></li>
                    <li><a href="https://www.facebook.com/TekyAcademy" target="_blank"><img src={fb} alt=""/></a></li>
                    <li><a href="https://www.tiktok.com/@teky_academy?lang=vi-VN" target="_blank"><img src={tt} alt=""/></a></li>
                    <li><a href="https://www.youtube.com/c/TekyAcademy" target="_blank"><img src={yt} alt=""/></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="f-col-2">
        <h3 class="f-title">Dành cho Học sinh</h3>
        <ul class="f-menu">
            <li><a href="/">Chơi &amp; Xem</a></li>
            <li><a href="/hoc/">Học</a></li>
            <li><a href="/lam-game/">Làm Game/dự án</a></li>
            <li><a href="/cong-dong/">Cộng đồng</a></li>
            <li><a href="/doi-qua/">Đổi quà</a></li>
            
            <li><a href="/login/">Hồ sơ của tôi</a></li>

            
            <li><a href="/tro-giup/">Trợ giúp</a></li>
        </ul>
    </div>
    <div class="f-col-3">
        <h3 class="f-title">Dành cho Phụ huynh</h3>
        <ul class="f-menu">
            <li><a href="/phu-huynh/gioi-thieu/">Về TEKY</a></li>
            <li><a href="/phu-huynh/tre-em-can-hoc-lap-trinh/">Giải pháp giáo dục</a></li>
            <li><a href="/phu-huynh/khoa-hoc/">Khóa học</a></li>
            <li><a href="/v2/tuyen-dung/">Tuyển dụng</a></li>
            <li><a href="https://teky.edu.vn/blog/">Blog</a></li>
            <li><a href="/lien-he/khieu-nai/">Khiếu nại</a></li>
            <li><a href="/phu-huynh/lien-he/">Liên hệ</a></li>
            <li><a href="https://drive.google.com/file/d/1pEvYcSbscIXYICtbEx1vomTp7GP9mQ3X/view?usp=sharing">Chính sách và Quy định</a></li>
            <li><a href="https://drive.google.com/file/d/1wJ3jPmlaGPLKC-F3XaBQsweGT8eVL4ow/view?usp=sharing">Chính sách bảo vệ thông tin</a></li>
        </ul>
    </div>
    <div class="f-col-4">
        <h3 class="f-title">Thông tin liên hệ</h3>
        <div class="info-row">
            <span class="info-icon"><img src={phone} alt=""/></span>
            <div class="info-cont">
                <ul class="list-hotline">
                    <li>
                        <label class="hotline-label">Tổng đài</label>
                        <strong class="hotline-number">1900 3168</strong>
                    </li>
                    <li>
                        <label class="hotline-label">Hotline lãnh đạo</label>
                        <strong class="hotline-number">033 459 2016</strong>
                    </li>
                </ul>
            </div>
        </div>
        <div class="info-row">
            <span class="info-icon"><img src={mail} alt=""/></span>
            <div class="info-cont"><strong>support</strong>@teky.edu.vn</div>
        </div>
        <div class="info-row">
            <span class="info-icon"><img src={location} alt=""/></span>
            <div class="info-cont">
                <p>
                    <strong class="d-block">Trụ sở chính Miền Bắc</strong>
                    <span class="addres-name">Tầng 5, Tòa nhà Mac Plaza Phường Mộ Lao, Quận Hà Đông, Hà Nội</span>
                </p>
                <p>
                    <strong class="d-block">Trụ sở chính Miền Nam</strong>
                    <span class="addres-name">152 Đ. Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh </span>
                </p>
            </div>
        </div>
        <div class="info-row">
            <span class="info-icon"><img src={office} alt=""/></span>
            <div class="info-cont"><a class="office-name" href="/phu-huynh/lien-he/">Danh sách toàn bộ học viện</a></div>
        </div>

        <address class="copyright">Copyright © 2016-2023 <strong>TEKY Holdings</strong>. All rights reserved.</address>
    </div>
</footer>
        </>
    )
}

export default Footer