import React from 'react';
import Logo from '@/img/logo.png'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#12123f] pt-14 pb-10 max-lg:pt-7 max-lg:pb-5">
            <div className="containner flex flex-col justify-between h-full">
                <div className="flex justify-between items-start max-md:flex-col">
                    <Link to="/">
                        <img className="w-[158px] h-[50px] max-lg:w-[130px] max-lg:h-[40px]" src={Logo} alt="Logo"/>
                    </Link>
                    <div className="flex gap-[50px] max-md:flex-col max-lg:mt-7">
                        <ul className="flex flex-col gap-[15px]">
                            <li>
                                <Link className="text-white text-[17px] hover:text-blue-900" to="/about-us">О нас</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-blue-900" to="/services">Услуги</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-blue-900" to="/questions-and-answers">Вопросы и ответы</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-blue-900" to="/jewelry-to-order">Украшения на заказ</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-blue-900" to="/contacts">Контакты</Link>
                            </li>
                        </ul>
                        <p className="text-white text-[19px] h-[60px] hover:text-blue-900">Новокузнецкая улица, 13с1 <br/> Новокузнецкая улица, 13с1, Москва</p>
                    </div>
                </div>
                <div className="flex justify-between mt-10 pt-5 border-t border-t-stone-600 max-[500px]:flex-col max-[500px]:gap-2.5">
                    <p className="text-slate-600">@2024 Valantis</p>
                    <p className="text-slate-600">Политика конфиденциальности</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
