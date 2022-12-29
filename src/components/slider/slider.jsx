import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider1() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: -1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4 pt-4 text-center">
                Fashion Style
            </h1>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2">
                <div className="h-auto text-center relative overflow-hidden bg-blue-50">
                    <Slider {...settings1} className="">
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/639231a7714d9ea25bf0e84d/master/w_1280,c_limit/00001-givenchy-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-fit object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/639c51d5e0f03d269143ded0/master/w_1280,c_limit/00001-dior-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/639769bb54f2242e8eb33795/master/w_1280,c_limit/00001-stella-mccartney-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/63906c08afe996759149ea5e/master/w_1280,c_limit/00001-thom-browne-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/6391dd59eb2d9b2a4e8f7725/master/w_1280,c_limit/00001-chanel-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/63889ac156818544344e01e1/master/w_1280,c_limit/00001-erdem-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                    </Slider>
                </div>

                <div className=" h-auto bg-blue-50 text-center relative overflow-hidden">
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
                                src="https://assets.vogue.com/photos/63739d56154e012b55a8e224/master/w_1280,c_limit/00001-diesel-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/638a0ba8afe996759149e79b/master/w_1280,c_limit/00001-victoria-beckham-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/638a2c860ed946f1e1e794de/master/w_1280,c_limit/00001-chloe-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/638a1cd90fe42b222cb62269/master/w_1280,c_limit/00001-moschino-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://assets.vogue.com/photos/63905fc0c94e4c660017e967/master/w_1280,c_limit/00001-carolina-herrera-pre-fall-2023-credit-brand.jpg"
                                alt=""
                                className="w-full object-cover object-center"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}