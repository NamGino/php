import reIMG from "../image/registerImg.svg"
import logo from "../image/logoLoginsvg.svg"
import logGG from "../image/loginGoogle.svg"
import "./register.css"
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <>
            <div class="register" id="wrapper">
                <div class="log-wrap register-page">
                    <div class="form-wrap">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="register-banner">
                                    <img alt="" src={reIMG} />
                                </div>
                                <div class="log-head">
                                    <h1 class="log-title">Đăng ký!</h1>
                                </div>
                                <label class="head-label">Bạn sẽ có<br />Một trải nghiệm tuyệt vời</label>
                                <ul class="experience-list">
                                    <li>Tham gia cộng đồng công nghệ</li>
                                    <li>Hàng trăm cuộc thi công nghệ</li>
                                    <li>Trải nghiệm stem</li>
                                    <li>Miễn phí đăng ký</li>
                                    <li>Học thử miễn phí</li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="logo-teky">
                                    <Link to="/">
                                        <img alt="" src={logo} />
                                    </Link>          </div>
                                <form class="simple_form new_user" id="devise_registration_form" data-turbo="false" action="/users?locale=vi" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="zqfZywKdc2Brlu_PjlXDF3dXSBQRNLNASLksQUoniGvmIn7EHilgC9glut4GP1Y9kNfys1YkCDWeQMayvP8gIA" autocomplete="off" />
                                    <div class="form-group">
                                        <div class="form-group email optional user_email"><input class="form-control string email optional" autofocus="autofocus" placeholder="Email" type="email" name="user[email]" id="user_email" /></div>
                                        <div class="invalid-feedback"></div>
                                    </div>
                                    <div class="form-group form-group-icons">
                                        <input autocomplete="new-password" placeholder="Mật khẩu" class="form-control" error_html="class is-invalid" type="password" name="user[password]" id="user_password" />
                                        <div class="invalid-feedback"></div>
                                        <span class="form-group-icon js-show-password"><i class="icon24-eye"></i></span>
                                    </div>
                                    <div class="form-group form-group-icons">
                                        <div class="form-group password optional user_password_confirmation"><input class="form-control password optional" placeholder="Nhập lại mật khẩu mới" type="password" name="user[password_confirmation]" id="user_password_confirmation" /></div>
                                        <span class="form-group-icon js-show-password"><i class="icon24-eye"></i></span>
                                        <div class="invalid-feedback"></div>
                                    </div>
                                    <input type="submit" name="commit" value="Đăng ký" class="btn btn-cmn btn-submit btn-warning" data-disable-with="Đăng ký" />
                                </form>          <p class="text-center fs-6">Bạn đã có tài khoản?
                                    <Link class="text-link font-weight-bold" to='/Login'>Đăng nhập</Link>
                                </p>
                                <p class="text-center fs-6">
                                    Bạn có tài khoản trường học đối tác của TEKY?
                                    <Link class="text-link font-weight-bold" to='/Login'>Đăng nhập tại đây</Link>
                                </p>
                                <div class="register-or">
                                    <span class="label-or">Hoặc đăng nhập bằng</span>
                                </div>
                                <ul class="register-other">
                                    <li>
                                        <form data-turbo="false" action="/users/auth/google_oauth2?locale=vi" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="78HaTjiBWxoIklf71L49S6tOIjv_0fuE_KZkO71Qwd3gfu9sdqtAhaLzJe8SO5nxySPOXf6YTQ_n__e2zHmzrQ" autocomplete="off" />
                                            <button name="button" type="submit" class="devise__social-register">
                                                <img alt="auth" src={logGG} />
                                            </button></form>  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register