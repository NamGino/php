import "./login.css"
import {Link} from 'react-router-dom'
import logo from "../image/logoLoginsvg.svg"
import logGG from "../image/loginGoogle.svg"
const Login = () => {
    return (
        <>
            <div className="login" id="wrapper">
                <div className="log-wrap login-page">
                    <div className="form-wrap">
                        <div class="log-head">
                            <h1 class="log-title">Đăng nhập!</h1>
                            <span class="logo">
                                <Link to="/">
                                    <img alt="auth" src={logo} />
                                </Link>
                            </span>
                        </div>
                        <label class="head-label">Chào mừng!<br />Bạn đã quay trở lại</label>
                        <form class="simple_form new_user" id="devise_sign_in_form" data-turbo="false" action="/users/sign_in?locale=vi" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="dWrKVtbUZiM0B9d3weBPkrYJSIC52K0pqmkJOpP28_Pt3Asprp3OU54VPotgwXXYdMacspjTh38rd9NjHYo4sA" autocomplete="off" />
                            <meta name="csrf-param" content="authenticity_token" />
                            <meta name="csrf-token" content="Tvtq3zfdLb0-Bw3ME3YftloG99ooFamYscIHwM7nIFl19lVAR9q6Et9wUvyt85SKV-4PLxHmi6RQmIMQ2nP3RA" />
                            <div class="form-group">
                                <div class="form-group email optional user_email">
                                    <input class="form-control string email optional" autofocus="autofocus" placeholder="Số điện thoại hoặc email" type="text" name="user[email]" id="user_email" /></div>
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="form-group">
                                <input placeholder="Mật khẩu" autocomplete="**********" class="form-control" autofocus="autofocus" type="password" name="user[password]" id="user_password" />
                                <span class="form-group-icon js-show-password"><i class="icon24-eye"></i></span>
                            </div>
                            <p class="forgot-pass">
                                <a href="/users/password/new?locale=vi">Quên mật khẩu?</a>
                            </p>
                            <input type="submit" name="commit" value="Đăng nhập" class="btn btn-cmn btn-info btn-submit" data-disable-with="Đăng nhập" />
                        </form>
                        <div class="login-or">
                            <span class="label-or">Hoặc đăng nhập bằng</span>
                        </div>
                        <ul class="login-other">
                            <li>
                                <form data-turbo="false" action="/users/auth/google_oauth2?locale=vi" accept-charset="UTF-8" method="post">
                                    <input type="hidden" name="authenticity_token" value="n8c6vRlSKE6v-tj2gVZol7EFolLxLlEPZbbyd4A-sN2Rl4J2RPNHUdf_GapA_0ZYZ7Gals2kF5rQS52LHf8YBA" autocomplete="off" />
                                    <button name="button" type="submit" class="devise__social-login">
                                        <img alt="auth" src={logGG} />
                                    </button>
                                </form>
                            </li>
                        </ul>
                        <p class="no-account mt-0">
                            Đăng nhập
                            <a class="text-link font-weight-bold" href="/users/passcode.user?locale=vi"> Tài khoản học sinh</a>
                        </p>
                        <p class="no-account mt-0">
                            Bạn chưa có tài khoản?
                            <Link class="text-link font-weight-bold" to="/Register">Đăng ký ngay</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login