import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import "./main.css"
import sortby from "../image/sortby-icon.svg"
import paddy from "../image/icon-paddy-white.svg"
import iconMenu from "../image/items-menu.svg"
import btnPlay from "../image/button-play.svg"
import heart from "../image/icon-heart.svg"
import cmt from "../image/icon-mesenger.svg"
import share from "../image/icon-share.svg"
const Main = () => {
    const games = [
        <div className="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/330606'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/7/Screenshot_6.png" alt="" />
                        </div>
                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Nguyễn Lưu...</strong>
                                <span className="year-old">10 tuổi</span>
                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">MooMoo.io - v3.6.5</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">
                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/huongnlt-2023-07-06.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/330606" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/333502'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/15/Sky_Dragon.jpg" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Hà Minh Hả...</strong>

                                <span className="year-old">11 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Sky Dragon</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">
                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/haihm-2023-07-15.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/333502" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/15254'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2022/7/22/Screenshot_6.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Phạm Quang...</strong>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Việt nam sẽ chiến thắng</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">
                                <img src="/static/web/upload/ava_2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/15254" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/330743'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/7/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-07-07_165338.png" alt="" />
                        </div>
                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Nguyễn Hà ...</strong>
                                <span className="year-old">8 tuổi</span>
                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Nghệ An - tự hào thiếu nhi quê hương Bác</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">
                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trinhnh-2023-07-06.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/330743" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/333190'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/14/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-07-14_103857.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">An Bee</strong>

                                <span className="year-old">9 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Private roller coaster</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/beea-2023-07-14.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/333190" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/284482'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/6/28/kSm7XJzr6dAvAjPy_2023628153836.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Phạm Ngọc ...</strong>

                                <span className="year-old">12 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Vừng ơi mở ra</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/children_938378228_168343-2023-10-24.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/284482" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/337316'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/24/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-07-24_083731.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Đặng Tiến ...</strong>

                                <span className="year-old">9 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Bình Dương những chuyến đi</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/dongdt-2023-07-22.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/337316" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/358946'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/9/29/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-09-29_133232.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Vũ Hoàng B...</strong>

                                <span className="year-old">8 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">những phát minh vĩ đại</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">


                                <img src="/static/web/upload/ava_2.png" alt="" />



                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/358946" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/388864'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/10/28/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-28_155132.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Nguyễn Lưu...</strong>

                                <span className="year-old">10 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Sản phẩm môn Mindstorm</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/huongnlt-2023-07-06.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        /  Hãy
                        <a href="/project/388864" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/334860'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/18/%EC%B2%AD%ED%95%99%EC%B4%88_6-2%EB%B0%98_3%EB%AA%A8%EB%91%A0_%EB%8F%99%EB%9E%98%EB%A9%94%EC%9D%B4%EC%BB%A4%EA%B5%90%EC%9C%A1%EC%B2%B4%ED%97%98%EC%84%BC%ED%84%B0.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Hằng Nino</strong>

                                <span className="year-old">10 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">청학초 6-2반 3모둠 동래메이커교육체험센터</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/ninoh-2023-07-07.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/334860" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-active" data-slick-index="6" aria-hidden="false" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/330606'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/7/Screenshot_6.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Nguyễn Lưu...</strong>

                                <span className="year-old">10 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">MooMoo.io - v3.6.5</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/huongnlt-2023-07-06.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/330606" tabindex="0"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-current slick-active slick-center" data-slick-index="7" aria-hidden="false" style={{ width: "277px" }}><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/333502'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/15/Sky_Dragon.jpg" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Hà Minh Hả...</strong>

                                <span className="year-old">11 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Sky Dragon</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/haihm-2023-07-15.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/333502" tabindex="0"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-active" data-slick-index="8" aria-hidden="false" style={{ width: "277px" }}><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/15254'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2022/7/22/Screenshot_6.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Phạm Quang...</strong>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Việt nam sẽ chiến thắng</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">


                                <img src="/static/web/upload/ava_2.png" alt="" />



                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/15254" tabindex="0"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide" data-slick-index="9" aria-hidden="true" style={{ width: "277px" }}><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/330743'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/7/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-07-07_165338.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Nguyễn Hà ...</strong>

                                <span className="year-old">8 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Nghệ An - tự hào thiếu nhi quê hương Bác</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trinhnh-2023-07-06.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/330743" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/333190'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/14/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-07-14_103857.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">An Bee</strong>

                                <span className="year-old">9 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Private roller coaster</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/beea-2023-07-14.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/333190" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/284482'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/6/28/kSm7XJzr6dAvAjPy_2023628153836.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Phạm Ngọc ...</strong>

                                <span className="year-old">12 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Vừng ơi mở ra</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/children_938378228_168343-2023-10-24.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/284482" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/337316'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/24/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-07-24_083731.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Đặng Tiến ...</strong>

                                <span className="year-old">9 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Bình Dương những chuyến đi</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/dongdt-2023-07-22.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/337316" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/358946'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/9/29/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-09-29_133232.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Vũ Hoàng B...</strong>

                                <span className="year-old">8 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">những phát minh vĩ đại</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">


                                <img src="/static/web/upload/ava_2.png" alt="" />



                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/358946" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/388864'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/10/28/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-28_155132.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Nguyễn Lưu...</strong>

                                <span className="year-old">10 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Sản phẩm môn Mindstorm</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/huongnlt-2023-07-06.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/388864" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/334860'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/18/%EC%B2%AD%ED%95%99%EC%B4%88_6-2%EB%B0%98_3%EB%AA%A8%EB%91%A0_%EB%8F%99%EB%9E%98%EB%A9%94%EC%9D%B4%EC%BB%A4%EA%B5%90%EC%9C%A1%EC%B2%B4%ED%97%98%EC%84%BC%ED%84%B0.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Hằng Nino</strong>

                                <span className="year-old">10 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">청학초 6-2반 3모둠 동래메이커교육체험센터</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/ninoh-2023-07-07.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/334860" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="16" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/330606'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/7/Screenshot_6.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Nguyễn Lưu...</strong>

                                <span className="year-old">10 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">MooMoo.io - v3.6.5</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/huongnlt-2023-07-06.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/330606" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="17" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/333502'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/15/Sky_Dragon.jpg" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Hà Minh Hả...</strong>

                                <span className="year-old">11 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Sky Dragon</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/haihm-2023-07-15.png" alt="" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/333502" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="18" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/15254'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2022/7/22/Screenshot_6.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Nhà sáng tạo <strong className="text-primary fix-length-name">Phạm Quang...</strong>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Việt nam sẽ chiến thắng</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">


                                <img src="/static/web/upload/ava_2.png" alt="" />



                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/15254" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
        <div className="slick-slide slick-cloned" data-slick-index="19" aria-hidden="true" style={{ width: "277px" }} tabindex="-1"><div><div className="items" style={{ width: "100%", display: "inline-block" }}>
            <div className="items-game">
                <div className="game-wrap">
                    <div className="game-view">
                        <div className="game-img" onclick="location.href='/project/330743'">
                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/7/7/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-07-07_165338.png" alt="" />
                        </div>

                    </div>
                    <div className="game-info">
                        <div className="game-info-user">
                            <div className="user-name">
                                Code thủ <strong className="text-primary fix-length-name">Nguyễn Hà ...</strong>

                                <span className="year-old">8 tuổi</span>

                            </div>
                            <div className="game-name-content">
                                <h4 className="game-name game-name-custom">Nghệ An - tự hào thiếu nhi quê hương Bác</h4>
                            </div>
                        </div>
                        <div className="user-thumb">
                            <div className="user__thumb user__thumb-13 user__thumb-48">

                                <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trinhnh-2023-07-06.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-playnow">
                    <div className="inner">
                        <img className="svg" src={paddy} alt="" /> Hãy
                        <a href="/project/330743" tabindex="-1"> chơi ngay</a> để nhặt 100 thóc nhé
                    </div>
                </div>
            </div>
        </div></div></div>,
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextClick = () => {
        if (currentSlide < games.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <>
            <Header />
            <main id="contents" className="play_page">
                <div className="wrap_main">
                    <div id="sidebar">
                        <div className="sidebar_main">
                            <ul className="sidebar_menu">
                                <li>
                                    <a className="active" href="/">
                                        <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none" class="svg replaced-svg">
                                            <path d="M19.0157 10.641H19.0078L17.7134 3.9308C17.7134 3.92286 17.7134 3.92286 17.7055 3.91492C17.5065 2.81705 16.9285 1.82383 16.0723 1.1084C15.2161 0.392971 14.136 0.000710552 13.0203 0L6.03217 0.023823C4.9112 0.0220977 3.82563 0.416321 2.96699 1.13695C2.10834 1.85757 1.53178 2.85829 1.33903 3.96256V3.97845L0.0446455 10.633C-0.0215789 11.0028 -0.0140637 11.382 0.0667592 11.7489C0.147582 12.1158 0.300119 12.4631 0.515601 12.7708C0.731083 13.0785 1.00526 13.3406 1.32237 13.542C1.63949 13.7434 1.99328 13.8802 2.36342 13.9444C2.52558 13.9764 2.69049 13.9923 2.85576 13.9921C3.61398 13.9905 4.34122 13.691 4.88072 13.1583L4.91248 13.1185L8.14447 9.54509L10.9159 9.52921L14.1399 13.1265L14.1796 13.1662C14.7153 13.6999 15.4405 13.9998 16.1967 14C16.3645 13.9999 16.5321 13.9839 16.6969 13.9524C17.4425 13.8187 18.1049 13.3954 18.5394 12.7749C18.9739 12.1545 19.1451 11.3873 19.0157 10.641ZM7.62037 5.42371H6.98509V6.05899C6.98509 6.22748 6.91816 6.38906 6.79902 6.5082C6.67988 6.62734 6.51829 6.69427 6.34981 6.69427C6.18132 6.69427 6.01973 6.62734 5.9006 6.5082C5.78146 6.38906 5.71453 6.22748 5.71453 6.05899V5.42371H5.07925C4.91076 5.42371 4.74917 5.35678 4.63003 5.23764C4.5109 5.1185 4.44396 4.95692 4.44396 4.78843C4.44396 4.61994 4.5109 4.45836 4.63003 4.33922C4.74917 4.22008 4.91076 4.15315 5.07925 4.15315H5.71453V3.51787C5.71453 3.34938 5.78146 3.18779 5.9006 3.06866C6.01973 2.94952 6.18132 2.88259 6.34981 2.88259C6.51829 2.88259 6.67988 2.94952 6.79902 3.06866C6.91816 3.18779 6.98509 3.34938 6.98509 3.51787V4.15315H7.62037C7.78886 4.15315 7.95044 4.22008 8.06958 4.33922C8.18872 4.45836 8.25565 4.61994 8.25565 4.78843C8.25565 4.95692 8.18872 5.1185 8.06958 5.23764C7.95044 5.35678 7.78886 5.42371 7.62037 5.42371ZM10.7968 4.78843C10.7968 4.61994 10.8637 4.45836 10.9828 4.33922C11.102 4.22008 11.2636 4.15315 11.4321 4.15315H13.9732C14.1417 4.15315 14.3033 4.22008 14.4224 4.33922C14.5415 4.45836 14.6085 4.61994 14.6085 4.78843C14.6085 4.95692 14.5415 5.1185 14.4224 5.23764C14.3033 5.35678 14.1417 5.42371 13.9732 5.42371H11.4321C11.2636 5.42371 11.102 5.35678 10.9828 5.23764C10.8637 5.1185 10.7968 4.95692 10.7968 4.78843ZM16.4746 12.7056C16.2256 12.7493 15.9697 12.7332 15.7281 12.6587C15.4865 12.5841 15.266 12.4532 15.0849 12.2768L12.6153 9.53715H13.0203C13.8307 9.53793 14.628 9.33196 15.3367 8.93872C16.0453 8.54548 16.642 7.97796 17.0702 7.28985L17.761 10.8792C17.8303 11.2917 17.7341 11.7149 17.4932 12.0568C17.2524 12.3988 16.8863 12.6319 16.4746 12.7056Z" fill="black"></path>
                                        </svg></span>
                                        <strong className="text">Chơi &amp; Xem</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="/hoc/" className="">
                                        <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none" className="svg replaced-svg">
                                            <path d="M9.81818 6.54545H15.5455V7.77273H9.81818M9.81818 4.5H15.5455V5.72727H9.81818M9.81818 8.59091H15.5455V9.81818H9.81818M16.3636 0H1.63636C1.20237 0 0.786158 0.172402 0.47928 0.47928C0.172402 0.786157 0 1.20237 0 1.63636V12.2727C0 12.7067 0.172402 13.1229 0.47928 13.4298C0.786158 13.7367 1.20237 13.9091 1.63636 13.9091H16.3636C16.7976 13.9091 17.2138 13.7367 17.5207 13.4298C17.8276 13.1229 18 12.7067 18 12.2727V1.63636C18 1.20237 17.8276 0.786157 17.5207 0.47928C17.2138 0.172402 16.7976 0 16.3636 0ZM16.3636 12.2727H9V1.63636H16.3636" fill="black"></path>
                                        </svg></span>
                                        <strong className="text">Học</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="/lam-game/" className="">
                                        <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="svg replaced-svg">
                                            <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM8 5H6V7C6 8.1 5.1 9 4 9C5.1 9 6 9.9 6 11V13H8V15H6C4.9 15 4 14.1 4 13V12C4 10.9 3.1 10 2 10V8C3.1 8 4 7.1 4 6V5C4 3.9 4.9 3 6 3H8V5ZM16 10C14.9 10 14 10.9 14 12V13C14 14.1 13.1 15 12 15H10V13H12V11C12 9.9 12.9 9 14 9C12.9 9 12 8.1 12 7V5H10V3H12C13.1 3 14 3.9 14 5V6C14 7.1 14.9 8 16 8V10Z" fill="black"></path>
                                        </svg></span>
                                        <strong className="text">Làm Game/dự án</strong>
                                    </a>
                                </li>
                                <li>
                                    <a href="/cong-dong/" className="">
                                        <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" className="svg replaced-svg">
                                            <path d="M9.52009 3.7666C9.2702 3.7666 9.03055 3.86587 8.85385 4.04257C8.67715 4.21927 8.57788 4.45892 8.57788 4.70881C8.57788 4.9587 8.67715 5.19836 8.85385 5.37506C9.03055 5.55176 9.2702 5.65102 9.52009 5.65102H13.2889C13.5388 5.65102 13.7785 5.55176 13.9552 5.37506C14.1319 5.19836 14.2311 4.9587 14.2311 4.70881C14.2311 4.45892 14.1319 4.21927 13.9552 4.04257C13.7785 3.86587 13.5388 3.7666 13.2889 3.7666H9.52009ZM9.52009 12.2465C9.2702 12.2465 9.03055 12.3458 8.85385 12.5225C8.67715 12.6992 8.57788 12.9388 8.57788 13.1887C8.57788 13.4386 8.67715 13.6783 8.85385 13.855C9.03055 14.0317 9.2702 14.1309 9.52009 14.1309H13.2889C13.5388 14.1309 13.7785 14.0317 13.9552 13.855C14.1319 13.6783 14.2311 13.4386 14.2311 13.1887C14.2311 12.9388 14.1319 12.6992 13.9552 12.5225C13.7785 12.3458 13.5388 12.2465 13.2889 12.2465H9.52009Z" fill="black"></path>
                                            <path d="M9.52009 0.94043C9.2702 0.94043 9.03055 1.0397 8.85385 1.2164C8.67715 1.3931 8.57788 1.63275 8.57788 1.88264C8.57788 2.13253 8.67715 2.37219 8.85385 2.54888C9.03055 2.72558 9.2702 2.82485 9.52009 2.82485H17.0578C17.3077 2.82485 17.5473 2.72558 17.724 2.54888C17.9007 2.37219 18 2.13253 18 1.88264C18 1.63275 17.9007 1.3931 17.724 1.2164C17.5473 1.0397 17.3077 0.94043 17.0578 0.94043H9.52009ZM9.52009 9.42033C9.2702 9.42033 9.03055 9.5196 8.85385 9.6963C8.67715 9.873 8.57788 10.1127 8.57788 10.3625C8.57788 10.6124 8.67715 10.8521 8.85385 11.0288C9.03055 11.2055 9.2702 11.3048 9.52009 11.3048H17.0578C17.3077 11.3048 17.5473 11.2055 17.724 11.0288C17.9007 10.8521 18 10.6124 18 10.3625C18 10.1127 17.9007 9.873 17.724 9.6963C17.5473 9.5196 17.3077 9.42033 17.0578 9.42033H9.52009Z" fill="black"></path>
                                            <path d="M0.942211 0C0.692321 0 0.452666 0.0992686 0.275967 0.275967C0.0992683 0.452666 0 0.692321 0 0.942211V5.65327C0 5.90316 0.0992683 6.14281 0.275967 6.31951C0.452666 6.49621 0.692321 6.59548 0.942211 6.59548H5.65327C5.90316 6.59548 6.14281 6.49621 6.31951 6.31951C6.49621 6.14281 6.59548 5.90316 6.59548 5.65327V0.942211C6.59548 0.692321 6.49621 0.452666 6.31951 0.275967C6.14281 0.0992686 5.90316 0 5.65327 0H0.942211ZM0.942211 8.47613C0.692321 8.47613 0.452666 8.5754 0.275967 8.7521C0.0992683 8.9288 0 9.16845 0 9.41834V14.1294C0 14.3793 0.0992683 14.6189 0.275967 14.7956C0.452666 14.9723 0.692321 15.0716 0.942211 15.0716H5.65327C5.90316 15.0716 6.14281 14.9723 6.31951 14.7956C6.49621 14.6189 6.59548 14.3793 6.59548 14.1294V9.41834C6.59548 9.16845 6.49621 8.9288 6.31951 8.7521C6.14281 8.5754 5.90316 8.47613 5.65327 8.47613H0.942211Z" fill="black"></path>
                                        </svg></span>
                                        <strong className="text">Cộng đồng</strong>
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="/doi-qua/">
                                        <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="svg replaced-svg">
                                            <mask id="mask0_134_1667" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                                <path d="M15.5571 16.7142V7.45703H2.44285V16.7142H15.5571Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15714 7.45759C1.15714 6.74751 1.73277 6.17188 2.44285 6.17188H15.5571C16.2672 6.17188 16.8428 6.74751 16.8428 7.45759V16.7147C16.8428 17.4248 16.2672 18.0004 15.5571 18.0004H2.44285C1.73277 18.0004 1.15714 17.4248 1.15714 16.7147V7.45759ZM3.72856 8.7433V15.429H14.2714V8.7433H3.72856Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.17188C9.71008 6.17188 10.2857 6.74751 10.2857 7.45759V16.7147C10.2857 17.4248 9.71008 18.0004 9 18.0004C8.28992 18.0004 7.71429 17.4248 7.71429 16.7147V7.45759C7.71429 6.74751 8.28992 6.17188 9 6.17188Z" fill="black"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15714 16.7144C1.15714 16.0043 1.73277 15.4287 2.44285 15.4287H15.5571C16.2672 15.4287 16.8428 16.0043 16.8428 16.7144C16.8428 17.4245 16.2672 18.0001 15.5571 18.0001H2.44285C1.73277 18.0001 1.15714 17.4245 1.15714 16.7144Z" fill="white"></path>
                                                <path d="M1.28571 4.37109H16.7143V7.45681H1.28571V4.37109Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.37165C0 3.66157 0.575634 3.08594 1.28571 3.08594H16.7143C17.4244 3.08594 18 3.66157 18 4.37165V7.45737C18 8.16745 17.4244 8.74308 16.7143 8.74308H1.28571C0.575634 8.74308 0 8.16745 0 7.45737V4.37165ZM2.57143 5.65737V6.17165H15.4286V5.65737H2.57143Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00516 0.376577C5.50726 -0.125526 6.32133 -0.125526 6.82343 0.376577L9.00001 2.55315L11.1766 0.376577C11.6787 -0.125526 12.4928 -0.125526 12.9949 0.376577C13.497 0.87868 13.497 1.69275 12.9949 2.19485L9.90915 5.28057C9.40704 5.78267 8.59297 5.78267 8.09087 5.28057L5.00516 2.19485C4.50305 1.69275 4.50305 0.87868 5.00516 0.376577Z" fill="white"></path>
                                            </mask>
                                            <g mask="url(#mask0_134_1667)">
                                                <path d="M-0.257139 -0.256836H18.2571V18.2575H-0.257139V-0.256836Z" fill="black"></path>
                                            </g>
                                        </svg></span>
                                        <strong className="text">Đổi quà</strong>
                                    </a>
                                </li>
                            </ul>
                            <div className="dot_line"></div>
                            <div className="siderbar_head">
                                <h3 className="sidebar_title">Khám phá</h3>
                            </div>
                            <ul className="discover_tags">

                                <li>
                                    <a className="" href="/hashtags/uaro">#uaro
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/mindstorms">#mindstorms
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/gamekinhdien">#gamekinhdien
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/laptrinhgame">#laptrinhgame
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/codekitten">#codekitten
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/gamehay">#gamehay
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/cospace">#cospace
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/scratch">#scratch
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/unity">#unity
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/js">#js
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/pygame">#pygame
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/html">#html
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/python">#python
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/photoshop">#photoshop
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/tinkercad">#tinkercad
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/wedo">#wedo
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/minecraft">#minecraft
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/diy">#DIY
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/tynker">#tynker
                                    </a>
                                </li>

                                <li>
                                    <a className="" href="/hashtags/roblox">#roblox
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main">
                        <div className="top_blog">
                            <div className="mv_500">
                                <div className="head_page">
                                    <h2 className="page_title">
                                        <span className="text_info">#</span>
                                        "Bạn nên thử - Top trending"
                                    </h2>
                                    <div className="dropdown sortby">
                                        <label className="sortby_label">
                                            Toàn bộ
                                        </label>
                                        <button className="sortby_button" data-toggle="dropdown" aria-expanded="false">
                                            <img src={sortby} alt="" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" id="filter-mode-trending" x-placement="bottom-end" style={{ position: "absolute", transform: "translate3d(-40px, 38px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
                                            <a className="dropdown-item active" href="javascript:void(0)" data-filter="all">Toàn bộ</a>
                                            <a className="dropdown-item" href="javascript:void(0)" data-filter="GAME">Chơi</a>
                                            <a className="dropdown-item" href="javascript:void(0)" data-filter="DIY">Xem</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="game-group">
                                    <div className="list-trending-games" style={{ position: "relative" }}>
                                        <div class="gameItems">
                                            <div class="gameItems__wrap">
                                                <div class="gameItems__head">
                                                    <div class="gameItems__head-info">
                                                        <div class="user-thumb">
                                                            <a class="t_Project_author-profile" href="" style={{width: "100%"}}>
                                                                <div class="user__thumb user__thumb-11 user__thumb-60">


                                                                    <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/trangbt-2023-09-12.png" alt="" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="user-info">
                                                            <a class="t_Project_author-profile" href="" style={{width: "100%"}}>
                                                                <div class="user-info-name">
                                                                    Nhà sáng tạo <strong class="text-primary">Bùi Thu Trang 	</strong>

                                                                    <span class="user-info-yearold">11 tuổi</span>

                                                                </div>
                                                            </a>
                                                            <h3 class="gameItems__title">robot nhảy dây</h3>

                                                            <ul class="list-tags">

                                                                <li><a className="text-dark" href="/hashtags/diy">
                                                                    #diy
                                                                </a></li>

                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div class="gameItems__head-control">
                                                        <button class="btn btn-outline-warning btn_cmn btn-view" onclick="location.href='/project/363022'"><span>

                                                            Xem ngay</span></button>

                                                        <div class="dropdown sortby">
                                                            <button class="sortby_button" type="button" data-toggle="dropdown"><img src={iconMenu} alt="" /></button>
                                                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{position: "absolute", transform: "translate3d(-183px, 19px, 0px)", top: "0px", left: "0px", willChange: "transform"}}>
                                                                <a class="dropdown-item" href="">Xem hồ sơ cá nhân</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gameItems__body">
                                                    <div class="gameItems-view">
                                                        <div class="gameItems-img" onclick="location.href='/project/363022'">
                                                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2023/9/12/mROeyXFAdKa60T8z_202391215859.jpg" alt="" />
                                                        </div>


                                                        <button class="gameItems-flag" onclick="location.href='/project/363022'">
                                                            <img src={btnPlay} alt="" />
                                                        </button>

                                                    </div>

                                                    <ul class="gameItems-control action_object" data-action_id="363022" data-content_type="51" id="action_363022">
                                                        <li>

                                                            <a class="game-favourite" href="/login/">
                                                                <img src={heart} />
                                                            </a>

                                                            <span class="number reaction_count">35</span>
                                                        </li>
                                                        <li>

                                                            <a class="game-mesenger" href="/project/363022" role="button">
                                                                <img src={cmt} />
                                                            </a>



                                                            <span class="number">19</span>

                                                        </li>

                                                        <li class="sortby dropup">
                                                            <a class="game-share" style={{padding: "7px" }}data-toggle="dropdown" href="#">
                                                                <img src={share} />

                                                            </a>

                                                            <div class="dropdown-menu ">

                                                                <div class="facebook-this">
                                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//teky.edu.vn/project/363022" class="dropdown-item item-share" target="_blank"><img alt="" src="/static/web/v3/img/common/social-face.svg" /> Facebook</a>
                                                                </div>


                                                                <div class="copy-this">
                                                                    <button data-copy-btn="buttonCopy" data-copy-url="https://teky.edu.vn/project/363022" class="dropdown-item item-share buttonCopy"><img alt="" src="/static/web/v3/coppy-link.png" />Copy Link</button>
                                                                </div>


                                                            </div>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="game-playnow">
                                                <div class="inner">
                                                    <img class="svg" src={paddy} alt="" />
                                                    Hãy <a className="text-white" href="/project/363022"> xem ngay</a> để nhặt 100 thóc nhé
                                                </div>
                                            </div>
                                        </div>

                                        <div class="gameItems">
                                            <div class="gameItems__wrap">
                                                <div class="gameItems__head">
                                                    <div class="gameItems__head-info">
                                                        <div class="user-thumb">
                                                            <a class="t_Project_author-profile" href="" style={{width: "100%"}}>
                                                                <div class="user__thumb user__thumb-11 user__thumb-60">


                                                                    <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/avatars/phuongvt1980-2023-06-04.png" alt="" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="user-info">
                                                            <a class="t_Project_author-profile" href="" style={{width: "100%"}}>
                                                                <div class="user-info-name">
                                                                    Nhà sáng tạo <strong class="text-primary">Trần Việt Thành</strong>

                                                                    <span class="user-info-yearold">16 tuổi</span>

                                                                </div>
                                                            </a>
                                                            <h3 class="gameItems__title">Dextop</h3>



                                                        </div>
                                                    </div>
                                                    <div class="gameItems__head-control">
                                                        <button class="btn btn-outline-warning btn_cmn btn-view" onclick="location.href='/project/363022'"><span>

                                                            Xem ngay</span></button>

                                                        <div class="dropdown sortby">
                                                            <button class="sortby_button" type="button" data-toggle="dropdown"><img src={iconMenu} alt="" /></button>
                                                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{position: "absolute", transform: "translate3d(-183px, 19px, 0px)", top: "0px", left: "0px", willChange: "transform"}}>
                                                                <a class="dropdown-item" href="">Xem hồ sơ cá nhân</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gameItems__body">
                                                    <div class="gameItems-view">
                                                        <div class="gameItems-img" onclick="location.href='/project/363022'">
                                                            <img src="https://sgp1.digitaloceanspaces.com/teky-prod/teky-edu-vn/media/project_medias/2022/8/7/Screenshot.png" alt="" />
                                                        </div>
                                                    </div>

                                                    <ul class="gameItems-control action_object" data-action_id="363022" data-content_type="51" id="action_363022">
                                                        <li>

                                                            <a class="game-favourite" href="/login/">
                                                                <img src={heart} />
                                                            </a>

                                                            <span class="number reaction_count">35</span>
                                                        </li>
                                                        <li>

                                                            <a class="game-mesenger" href="/project/363022" role="button">
                                                                <img src={cmt} />
                                                            </a>



                                                            <span class="number">19</span>

                                                        </li>

                                                        <li class="sortby dropup">
                                                            <a class="game-share" style={{padding: "7px" }}data-toggle="dropdown" href="#">
                                                                <img src={share} />

                                                            </a>

                                                            <div class="dropdown-menu ">

                                                                <div class="facebook-this">
                                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//teky.edu.vn/project/363022" class="dropdown-item item-share" target="_blank"><img alt="" src="/static/web/v3/img/common/social-face.svg" /> Facebook</a>
                                                                </div>


                                                                <div class="copy-this">
                                                                    <button data-copy-btn="buttonCopy" data-copy-url="https://teky.edu.vn/project/363022" class="dropdown-item item-share buttonCopy"><img alt="" src="/static/web/v3/coppy-link.png" />Copy Link</button>
                                                                </div>


                                                            </div>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="game-playnow">
                                                <div class="inner">
                                                    <img class="svg" src={paddy} alt="" />
                                                    Hãy <a className="text-white" href="/project/363022"> xem ngay</a> để nhặt 100 thóc nhé
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="games-new">
                                <div className="mw_500">
                                    <div className="head_page">
                                        <h2 className="page_title"><span className="text-warning">#</span>Game mới phát hành</h2>
                                    </div>
                                </div>
                                <div className="games-list">
                                    <div className="slider slider-games slick-initialized slick-slider" id="list-new-games">
                                        <button className="slick_prev slick-arrow" aria-label="Previous" type="button" onclick={handlePrevClick}>
                                            <i className="fal fa-chevron-circle-left"></i>
                                        </button>
                                        <div className="slick-list draggable" style={{ padding: "0px 100px" }}>
                                            <div className="slick-track" style={{ opacity: "1", width: "6648px", transform: "translate3d(-2770px, 0px, 0px)" }}>
                                                {games.map((game, index) => (
                                                    <div key={index}>
                                                        {game}
                                                    </div>
                                                )
                                                )}
                                            </div></div>
                                        <button className="slick_next slick-arrow" aria-label="Next" type="button" ><i className="fal fa-chevron-circle-right" onclick={handleNextClick}></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default Main;