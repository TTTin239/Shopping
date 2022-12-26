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
        <div className="h-1/4 w-full bg-blue-50 text-center relative overflow-hidden">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 mb-4 pt-4">
                Summer styles
            </h1>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://i0.wp.com/bowsandsequins.com/wp-content/uploads/2018/11/thanksgiving-outfit-gucci-belt.jpg?ssl=1"
                        alt=""
                        className="h-auto w-3/4 object-cover object-center"
                    />
                </div>
                <div>
                    <img
                        src="https://i0.wp.com/bowsandsequins.com/wp-content/uploads/2018/11/thanksgiving-outfit-gucci-belt.jpg?ssl=1"
                        alt=""
                        className="h-1/4 w-3/4 object-cover object-center"
                    />
                </div>
                <div>
                    <img
                        src="https://i0.wp.com/bowsandsequins.com/wp-content/uploads/2018/11/thanksgiving-outfit-gucci-belt.jpg?ssl=1"
                        alt=""
                        className="h-1/4 w-3/4 object-cover object-center"
                    />
                </div>
                <div>
                    <img
                        src="https://i0.wp.com/bowsandsequins.com/wp-content/uploads/2018/11/thanksgiving-outfit-gucci-belt.jpg?ssl=1"
                        alt=""
                        className="h-1/4 w-3/4 object-cover object-center"
                    />
                </div>
                <div>
                    <img
                        src="https://i0.wp.com/bowsandsequins.com/wp-content/uploads/2018/11/thanksgiving-outfit-gucci-belt.jpg?ssl=1"
                        alt=""
                        className="h-1/4 w-3/4 object-cover object-center"
                    />
                </div>
                <div>
                    <img
                        src="https://i0.wp.com/bowsandsequins.com/wp-content/uploads/2018/11/thanksgiving-outfit-gucci-belt.jpg?ssl=1"
                        alt=""
                        className="h-1/4 w-3/4 object-cover object-center"
                    />
                </div>
            </Slider>
        </div>
    );
}