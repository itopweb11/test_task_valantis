import React from 'react';
import Vector from  '@/img/vector.svg'
import {Link} from "react-router-dom";

const Navigation = ({namePage}) => {
    return (
        <div className="flex flex-col gap-5 max-sm:gap-[10px] max-[1050px]:mt-[70px]">
            <div className="services__navigation flex items-center mt-10 gap-[5px]">
                <Link to="/" className="navigation-home text-[#B3B3B3] text-[13px] leading-[150%]"
                >
                    Главная
                </Link>
                <img src={Vector} alt=">" />
                <p className="text-[13px] leading-[150%] font-helveticaNeue">
                    {namePage}
                </p>
            </div>
            <div>
                <h1 style={{ fontSize: 'clamp(28px, 2.8vw, 40px)' }} className="leading-[140%] max-sm:text-[28px]">{namePage}</h1>
                <div className="h-[1px]  bg-[#12123fe6] mt-5"></div>
            </div>
        </div>
    );
};

export default Navigation;
