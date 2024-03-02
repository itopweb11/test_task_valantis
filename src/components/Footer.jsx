import React, {useEffect} from 'react';
import Logo from '@/img/logo.png'
import {Link} from "react-router-dom";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        return () => {
            window.removeEventListener("click", scrollToTop);
        };
    }, []);

    return (
        <footer className="bg-[#12123f] pt-14 pb-10 max-lg:pt-7 max-lg:pb-5">
            <div className="containner flex flex-col justify-between h-full">
                <div className="flex justify-between items-start max-md:flex-col">
                    <Link to="/">
                        <img onClick={scrollToTop} className="w-[158px] h-[50px] max-lg:w-[130px] max-lg:h-[40px]" src={Logo} alt="Logo"/>
                    </Link>
                    <div className="flex gap-[50px] max-md:flex-col max-lg:mt-7">
                        <ul onClick={scrollToTop} className="flex flex-col gap-[15px]">
                            <li>
                                <Link className="text-white text-[17px] hover:text-[#4c4cf6e6]" to="/about-us">О нас</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-[#4c4cf6e6]" to="/services">Услуги</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-[#4c4cf6e6]" to="/questions-and-answers">Вопросы и ответы</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-[#4c4cf6e6]" to="/jewelry-to-order">Украшения на заказ</Link>
                            </li>
                            <li>
                                <Link className="text-white text-[17px] hover:text-[#4c4cf6e6]" to="/contacts">Контакты</Link>
                            </li>
                        </ul>
                        <p className="text-white text-[19px] h-[60px] cursor-pointer hover:text-[#4c4cf6e6]">Новокузнецкая улица, 13с1 <br/> Новокузнецкая улица, 13с1, Москва</p>
                    </div>
                </div>
                <div className="flex justify-between mt-10 pt-5 border-t border-t-[#e3e3e3] max-[500px]:flex-col max-[500px]:gap-2.5">
                    <p className="text-[#e3e3e3]">@2024 Valantis</p>
                    <p className="text-[#e3e3e3]">Политика конфиденциальности</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
