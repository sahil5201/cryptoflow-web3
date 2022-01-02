import React from 'react'
import style from "./style.module.scss"
import avatar from "./images/avatar.png"
import eye from "./images/eye.png"

function CryptoPlatform() {
    return (
        <div className={`${style.CryptoPlatformWrap} grid grid-cols-1 md:grid-cols-2 gap-6`}>
            <div className={style.PlatformBox}>
                <div className={style.title}>
                    Available <b>P2P</b> Blockchain lending platform
                </div>
                <div className={style.SubText}>
                    Libra is a complete <a href='/'>free market</a> environment that contains all the elements that a credit business needs to function.
                </div>
                <div className={style.btnBox}>
                    <button className="btn btn-blue btn-sign-up">Join waiting list</button>
                    <button className={`btn ${style.btnEyeWrap}`}>
                        <div className={style.btnEyeLine}>
                            <div className={style.btnEye}>
                                <img src={eye} alt="eye" />
                            </div>
                        </div>

                        <span>Read whitepaper</span>
                    </button>
                </div>
            </div>
            <div className={style.AvatarBox}>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default CryptoPlatform
