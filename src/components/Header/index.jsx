import React from 'react'
import style from "./headerStyle.module.scss"
import logo from "./images/logo.png"

function Header() {
    return (
        <div className={style.HeaderWrap}>
            <div className="grid grid-cols-6">
                <div className='flex col-span-2 justify-start'>
                    <div className={style.logoWrap}>
                        <img src={logo} alt="" />
                        <span>
                            CryptoFlow
                        </span>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center'>
                    <ul className={style.menuWrap}>
                        <li>How it works</li>
                        <li>Team</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='col-span-2 flex justify-end'>
                    <div className={style.authBtnWrap}>
                        <button className="btn">Sign-in</button>
                        <button className="btn btn-blue btn-sign-up">Sign-up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
