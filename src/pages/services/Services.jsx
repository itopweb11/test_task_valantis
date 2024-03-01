import React from 'react';
import Navigation from "@/components/Navigation";
import ServicesCard from "@/pages/services/ServicesData";

const Services = () => {
    return (
        <div className="containner">
            <Navigation namePage="Услуги" />
            <div className="mb-20">
                <h2 style={{ fontSize: 'clamp(20px, 1.9vw, 28px)' }} className="mt-10">
                    В <span style={{ fontSize: 'clamp(25px, 2.8vw, 35px)' }} >Valantis</span> мы гордимся качеством и мастерством наших
                    ювелирных изделий. Каждое украшение проходит тщательную проверку, чтобы обеспечить его
                    долговечность и безупречную отделку. Наши ювелиры обладают многолетним опытом и стремятся
                    создавать изделия, которые будут радовать вас долгие годы.
                </h2>
                <p className="mt-10 text-[21px]">
                    Услуги интернет-магазина ювелирных изделий <span className="text-[25px]">Valantis</span>
                </p>
                <div className="flex flex-col gap-10 mt-5">
                    {ServicesCard.map((elem, index) => (
                        <div key={index} style={{ background: 'rgba(8, 108, 128, 0.1)' }} className=" flex flex-col gap-5 p-10 max-sm:p-5">
                            <h3 className="text-[23px] font-semibold text-[#12123fe6]">
                                {elem.title}
                            </h3>
                            <p className="text-[20px] flex items-center gap-2.5">
                                <span className="max-lg:hidden h-[2px] w-[15px] bg-[#12123fe6] block"></span>
                                {elem.desc1}
                            </p>
                            <p className="text-[20px] flex items-center gap-2.5">
                                <span className="max-lg:hidden h-[2px] w-[15px] bg-[#12123fe6] block"></span>
                                {elem.desc2}
                            </p>
                            <p className="text-[20px] flex items-center gap-2.5">
                                <span className="max-lg:hidden h-[2px] w-[15px] bg-[#12123fe6] block"></span>
                                {elem.desc3}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
