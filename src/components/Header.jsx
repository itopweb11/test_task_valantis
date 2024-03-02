import React, {Fragment, useState} from 'react';
import Logo from '@/img/logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <div className="max-[1080px]:hidden header w-screen flex flex-col top-0 z-20 pt-8 pb-9 max-[1050px]:pt-2.5">
                <div className="containner">
                    <div className="grid grid-cols-12 gap-4 place-content-center">
                        <div className="logo col-span-3 z-10 flex items-center">
                            <Link to="/">
                                <img className="w-[158px] h-[50px]" src={Logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="col-span-6 flex justify-center items-center">
                            <ul className="header__menu text-nowrap flex text-center justify-between items-center z-20 bg-[#12123fe6] h-[45px] px-[18px] rounded-[10px]">
                                <li>
                                    <Link  className="text-white text-[15px] font-medium leading-[150%]" to="/about-us">
                                        О нас
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[15px] font-medium leading-[150%] tracking-[.7px]" to="/services">
                                        Услуги
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[15px] font-medium leading-[150%] tracking-[.2px]" to="/questions-and-answers">
                                        Вопросы и ответы
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white  text-[15px] font-medium leading-[150%]" to="/jewelry-to-order">
                                        Украшения на заказ
                                    </Link>
                                </li>
                                <li>
                                    <Link  className="text-white text-[15px] font-medium leading-[150%] tracking-[-0.1px]" to="/contacts">
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-3 flex justify-end items-center">
                            <div className="header__menu_contact flex items-center justify-center h-[45px] w-[200px] bg-[#12123fe6] rounded-[10px]">
                                <a className="text-white text-[15px] font-medium leading-[22.5px]" href="tel:+74950883333">
                                    +7-495-123-45-67
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-[1080px]:hidden overflow-x-hidden flex flex-col p-x-[0px!important]">
                <div style={{
                    background: isOpen ? 'white' : '',
                    position: isOpen ? 'fixed' : '',
                }} className="h-[72px] w-full flex justify-between items-center top-0 z-20 px-[17px]">
                    <Link to="/">
                        <img className="w-[130px] h-[40px]" src={Logo} alt="logo"/>
                    </Link>
                    {isOpen
                        ? <div onClick={toggleMenu} className="header__menu_btn flex flex-col gap-[5px] px-[7px] py-[12.5px] rounded-full bg-[#ffffff]">
                            <div className="header__menu_btn_line h-[2px] w-[20px] bg-[#12123fe6] rotate-45 relative top-[3px]"></div>
                            <div className="header__menu_btn_line h-[2px] w-[20px] bg-[#12123fe6] rotate-[-45deg] relative left-0 bottom-1"></div>
                        </div>
                        : <div onClick={toggleMenu} className="header__menu_btn flex flex-col gap-[5px] px-[7px] py-[12.5px] rounded-full bg-[#bdd0ee]">
                            <div className="header__menu_btn_line h-[2px] w-[20px] bg-[#12123fe6]"></div>
                            <div className="header__menu_btn_line h-[2px] w-[20px] bg-[#12123fe6]"></div>
                        </div>
                    }
                </div>
                {isOpen && (
                    <div style={{
                        overflowY: isOpen ? 'hidden' : 'auto',
                        position: 'fixed',
                        top: '72px',
                        right: 0,
                        height: '100vh',
                        width: '100%',
                        background: 'white',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0 16px',
                    }}>
                        <div className="h-[1px]  bg-[#12123fe6] mt-[10px]"></div>
                        <ul className="flex flex-col gap-[6px] py-[10px]">
                            <li>
                                <Link onClick={toggleMenu}  className="text-[#12123fe6] text-[15px] font-medium leading-[150%]" to="/about-us">
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleMenu} className="text-[#12123fe6] text-[15px] font-medium leading-[150%] tracking-[.7px]" to="/services">
                                    Услуги
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleMenu} className="text-[#12123fe6] text-[15px] font-medium leading-[150%] tracking-[.2px]" to="/questions-and-answers">
                                    Вопросы и ответы
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleMenu} className="text-[#12123fe6]  text-[15px] font-medium leading-[150%]" to="/jewelry-to-order">
                                    Украшения на заказ
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleMenu}  className="text-[#12123fe6] text-[15px] font-medium leading-[150%] tracking-[-0.1px]" to="/contacts">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                        <div className="h-[1px]  bg-[#12123fe6] mt-[10px]"></div>
                        <div className="flex flex-col gap-2 mt-[20px]">
                            <div className="flex flex-col gap-[3px]">
                                <p className="text-[13px] leading-[145%] font-medium">Телефон:</p>
                                <a className="text-[#12123fe6] leading-[27.2px] text-[15px] font-medium" href="tel:+74951234567">
                                    +7-495-765-43-21
                                </a>
                            </div>
                            <div className="flex flex-col gap-[3px]">
                                <p className="text-[13px] leading-[145%] font-medium">
                                    Gmail:
                                </p>
                                <a className="text-[#12123fe6] leading-[27.2px] text-[15px] font-medium" href="mailto:Valantis@gmail.com">
                                    Valantis@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Header;
