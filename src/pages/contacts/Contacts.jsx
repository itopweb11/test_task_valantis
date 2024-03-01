import React from 'react';
import Navigation from "@/components/Navigation";
import GoogleMapReact from 'google-map-react';

const Contacts = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

        return (
        <div className="containner">
            <Navigation namePage="Контакты" />
            <div className="mb-20">
                <h2 style={{ fontSize: 'clamp(20px, 1.9vw, 28px)' }} className="mt-10">
                    Контактная информация <span style={{ fontSize: 'clamp(25px, 2.8vw, 35px)' }}>Valantis</span>
                </h2>
                <div className="flex flex-col gap-[30px] p-[28px] bg-[#F8F8F8] mt-10">
                    <div className="flex justify-between max-xl:flex-col">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-[#12123fe6] text-[18px] mb-2.5">
                                    Адрес:
                                </h2>
                                <p className="gradient-border-left pr-[100px!important] leading-[27.2px] text-[18px] pl-[15px]">
                                    Новокузнецкая улица, 13с1 <br/> Новокузнецкая улица, 13с1, Москва
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-[#12123fe6] text-[18px] mb-2.5">
                                    Телефон:
                                </h2>
                                <a className="gradient-border-left pr-[100px!important] leading-[27.2px] text-[18px] pl-[15px]" href="tel:+74951234567">
                                    +7-495-123-45-67
                                </a>
                                <a className="gradient-border-left pr-[100px!important] leading-[27.2px] text-[18px] pl-[15px]" href="tel:+74951234567">
                                    +7-495-765-43-21
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-[#12123fe6] text-[18px] mb-2.5">
                                    Почта:
                                </h2>
                                <a className="gradient-border-left pr-[100px!important] leading-[27.2px] text-[18px] pl-[15px]" href="mailto:Valantis@gmail.com">
                                    Valantis@gmail.com
                                </a>
                                <a className="gradient-border-left pr-[100px!important] leading-[27.2px] text-[18px] pl-[15px]" href="mailto:Valantis@yandex.ru">
                                    Valantis@yandex.ru
                                </a>
                            </div>
                        </div>
                        <div className="w-[800px] h-auto max-xl:w-full ml-5 max-xl:h-[500px] max-xl:mt-10 max-xl:ml-0">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={55.7539}
                                    lng={37.6208}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacts;
