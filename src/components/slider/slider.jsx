import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider1() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div className="grid grid-cols-2 gap-y-10 ">
            <div className=" h-auto bg-blue-50 text-center relative overflow-hidden">
                <h1 className="font text-lg font-bold tracking-tight text-gray-900 mb-4 pt-4">
                    Givenchy
                </h1>
                <Slider {...settings} className="">
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639231a7714d9ea25bf0e84d/master/w_1280,c_limit/00001-givenchy-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-fit object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639231a7714d9ea25bf0e84d/master/w_1280,c_limit/00001-givenchy-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639231a7714d9ea25bf0e84d/master/w_1280,c_limit/00001-givenchy-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639231a7714d9ea25bf0e84d/master/w_1280,c_limit/00001-givenchy-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639231a7714d9ea25bf0e84d/master/w_1280,c_limit/00001-givenchy-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639231a7714d9ea25bf0e84d/master/w_1280,c_limit/00001-givenchy-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                </Slider>
            </div>

            <div className=" h-auto bg-blue-50 text-center relative overflow-hidden">
                <h1 className="font text-lg font-bold tracking-tight text-gray-900 mb-4 pt-4">
                    Max Mara
                </h1>
                <Slider {...settings} className="">
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639af1476135132983a57cf5/master/w_1280,c_limit/00001-max-mara-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-fit object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639af1476135132983a57cf5/master/w_1280,c_limit/00001-max-mara-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639af1476135132983a57cf5/master/w_1280,c_limit/00001-max-mara-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639af1476135132983a57cf5/master/w_1280,c_limit/00001-max-mara-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639af1476135132983a57cf5/master/w_1280,c_limit/00001-max-mara-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <div className="">
                        <img
                            src="https://assets.vogue.com/photos/639af1476135132983a57cf5/master/w_1280,c_limit/00001-max-mara-pre-fall-2023-credit-brand.jpg"
                            alt=""
                            className="w-full object-cover object-center"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}