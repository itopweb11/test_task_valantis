import React from 'react';
import Navigation from "@/components/Navigation";

const AboutUs = () => {
    return (
        <div className="containner">
            <Navigation namePage="О нас" />
            <div className="mb-20">
                <h2 style={{ fontSize: 'clamp(20px, 1.9vw, 28px)' }} className="mt-10">
                    <span style={{ fontSize: 'clamp(25px, 2.8vw, 35px)' }} >Valantis</span> - это эксклюзивный интернет-магазин ювелирных изделий, созданный для тех,
                    кто ценит красоту и качество. Мы предлагаем широкий выбор украшений из драгоценных металлов и
                    камней, которые станут идеальным дополнением к любому образу.
                </h2>
                <div>
                    <div className="flex flex-col gap-[30px] p-[28px] bg-[#F8F8F8] mt-10">
                        <h2 className="text-[25px]">
                            Наши преимущества:
                        </h2>
                        <div className="flex flex-col gap-[20px]">
                            <div className="gradient-border-left">
                                <p className="leading-[27.2px] text-[18px] pl-[15px]">
                                    <span className="font-semibold text-[#12123fe6]">Уникальный дизайн:</span> Наши ювелирные изделия создаются талантливыми дизайнерами,
                                    которые следят за последними тенденциями моды и создают украшения,
                                    которые выделяются своей оригинальностью и изысканностью.
                                </p>
                            </div>
                            <div className="gradient-border-left">
                                <p className="leading-[27.2px] text-[18px] pl-[15px]">
                                    <span className="font-semibold text-[#12123fe6]">Высокое качество:</span> Мы используем только высококачественные материалы,
                                    такие как золото, серебро, драгоценные и полудрагоценные камни.
                                    Наши украшения проходят строгий контроль качества,
                                    чтобы гарантировать их долговечность и безупречный внешний вид.
                                </p>
                            </div>
                            <div className="gradient-border-left">
                                <p className="leading-[27.2px] text-[18px] pl-[15px]">
                                    <span className="font-semibold text-[#12123fe6]">Широкий ассортимент:</span> В нашем интернет-магазине вы найдете широкий выбор
                                    ювелирных изделий на любой вкус и бюджет. У нас есть украшения для женщин,
                                    мужчин и детей, а также эксклюзивные коллекции для особых случаев.
                                </p>
                            </div>
                            <div className="gradient-border-left">
                                <p className="leading-[27.2px] text-[18px] pl-[15px]">
                                    <span className="font-semibold text-[#12123fe6]">Удобный сервис:</span> Мы предлагаем удобные способы оплаты и доставки,
                                    а также профессиональную консультацию наших специалистов,
                                    которые помогут вам подобрать идеальное украшение.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
