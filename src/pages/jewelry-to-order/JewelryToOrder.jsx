import React from 'react';
import Navigation from "@/components/Navigation";
import JewelryToOrderData from "@/pages/jewelry-to-order/JewelryToOrderData";

const JewelryToOrder = () => {
    return (
        <div className="containner">
            <Navigation namePage="Украшения на заказ" />
            <div className="mb-20">
                <h2 style={{ fontSize: 'clamp(25px, 2.7vw, 32px)' }} className="mt-10">
                    Украшения на заказ от <span style={{ fontSize: 'clamp(25px, 2.8vw, 35px)' }}>Valantis</span>
                </h2>
                <p className="mt-5 text-[21px]">
                    Создайте уникальные ювелирные изделия, которые идеально отражают ваш стиль и индивидуальность.
                    Наши опытные ювелиры работают с вами, чтобы воплотить ваши мечты в реальность,
                    используя высококачественные материалы и безупречное мастерство.
                </p>
                <p className="mt-5 text-[21px]">
                    От классических обручальных колец до современных колье и сережек — мы можем изготовить на заказ
                    любое ювелирное изделие, которое вы можете себе представить. Наши ювелиры тесно сотрудничают
                    с вами на каждом этапе процесса, гарантируя, что вы полностью удовлетворены конечным результатом.
                </p>
                <p className="mt-5 text-[21px]">
                    Независимо от того, ищете ли вы что-то особенное для себя или хотите создать уникальный подарок
                    для любимого человека, Valantis поможет вам создать идеальное украшение на заказ.
                    Свяжитесь с нами сегодня, чтобы начать работу над вашим индивидуальным шедевром.
                </p>
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    {JewelryToOrderData.map((elem, index) => (
                        <img
                            className="w-[600px] h-[300px]"
                            key={index}
                            src={elem}
                            alt="img"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JewelryToOrder;
