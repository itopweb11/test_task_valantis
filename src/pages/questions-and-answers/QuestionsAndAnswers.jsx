import React from 'react';
import Navigation from "@/components/Navigation";
import QuestionsAndAnswersCard from "@/pages/questions-and-answers/QuestionsAndAnswersData";

const QuestionsAndAnswers = () => {
    return (
        <div className="containner">
            <Navigation namePage="Вопросы и ответы" />
            <div className="mb-20">
                <h2 style={{ fontSize: 'clamp(20px, 2.7vw, 32px)' }} className="mt-10">
                    Часто задаваемые вопросы (FAQ) интернет-магазина ювелирных изделий
                    <span style={{ fontSize: 'clamp(25px, 2.8vw, 35px)' }}> Valantis</span>
                </h2>
                <div className="flex flex-col gap-14 mt-10">
                    {QuestionsAndAnswersCard.map((elem, index) => (
                        <div key={index} className=" flex flex-col gap-2.5">
                            <h3 className="text-[23px] font-semibold text-[#12123fe6]">
                                {elem.title}
                            </h3>
                            <p className="gradient-border-left text-[20px] flex items-center gap-2.5 pl-[15px]">
                                {elem.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionsAndAnswers;
