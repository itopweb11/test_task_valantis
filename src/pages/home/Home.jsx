import React, {useRef} from 'react';
import ScrollButtonImg from '@/img/scroll-button.png'
import Products from "@/components/Product/Products";

const Home = () => {
    const productsRef = useRef(null)

    const scrollToBottom = () => {
        productsRef.current.scrollIntoView()
    };

    return (
        <div className="home">
            <div className="home__banner w-full h-screen flex flex-col justify-end pb-[100px] mt-[-121px]">
                <div className="containner flex flex-col gap-[30px] max-[500px]:gap-[15px]">
                    <h1 style={{fontSize: 'clamp(25px, 4.9vw, 55px)'}} className="text-white">
                        Добро пожаловать в Valantis,<br className="max-lg:hidden"/>мир изысканных ювелирных украшений
                    </h1>
                    <p style={{fontSize: 'clamp(15px, 1.8vw, 20px)'}} className="text-white">
                        Valantis - это эксклюзивный интернет-магазин ювелирных изделий, созданный для тех,
                        кто ценит красоту и качество. Мы предлагаем широкий выбор украшений из драгоценных
                        металлов и камней, которые станут идеальным дополнением к любому образу.
                    </p>
                    <div className="flex justify-between max-md:flex-col max-md:gap-5">
                        <p style={{fontSize: 'clamp(14px, 1.6vw, 17px)'}} className="text-white">
                            Valantis – ювелирный бренд с глубоким пониманием современных трендов,
                            <br className="max-lg:hidden"/>сделавший ставку на природную красоту драгоценных камней.
                        </p>
                        <img
                            className="cursor-pointer w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px]"
                            onClick={scrollToBottom}
                            src={ScrollButtonImg}
                            alt="ScrollButton"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 py-20">
                <div className="containner flex flex-col gap-7">
                    <div className="flex flex-col gap-5">
                        <h2 style={{fontSize: 'clamp(32px, 3.1vw, 45px)'}}>
                            Ювелирные изделия и украшения
                        </h2>
                        <p className="text-[20px] ">
                            Интернет-магазин Valantis.ru предлагает изысканные украшения с натуральными камнями,
                            <br className="max-lg:hidden"/> созданные по самым высоким стандартам качества, цвета,
                            размера и формы. Украшения с натуральными камнями <br className="max-lg:hidden"/>
                            очаровывают своим сиянием и блеском
                        </p>
                        <p className="text-[20px] ">
                            С Valantis вы всегда будете выглядеть стильно и элегантно!
                        </p>
                    </div>
                    <div ref={productsRef} className="w-full">
                        <Products/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
