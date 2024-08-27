import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack,  IoIosArrowForward } from "react-icons/io";

interface Slide {
    imageUrl: string;
    title: string;
    caption: string;
}

const slidesData: Slide[] = [
    {
        imageUrl: 'images/dummy/hero-image1.jpg',
        title: '기획부터 제작, 카카오 최종 제안까지! 이모티콘 챌린지',
        caption: '승인받는 이모티콘 루틴으로 이모티콘 작가 데뷔하기!',
    },
    {
        imageUrl: 'images/dummy/hero-image2.png',
        title: '업계에서 먼저 찾는 프디 되기, 디자인시스템 워크숍',
        caption: '6주 만에 기초 이론부터 실제 프로젝트까지 모두 완성해 봅니다.',
    },
    {
        imageUrl: 'images/dummy/hero-image3.png',
        title: '예비 창작자를 위한 발상과 표현 워크숍',
        caption: '이석구 작가와 7주간의 창작 입문 훈련',
    },
];

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <IoIosArrowBack
            className={className}
            style={{ ...style, left: '10px', zIndex: 1, fontSize: '50px', color: 'white' }}
            onClick={onClick}
        />
    );
}

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <IoIosArrowForward
            className={className}
            style={{ ...style, right: '10px', zIndex: 1, fontSize: '50px', color: 'white' }}
            onClick={onClick}
        />
    );
}

export default function SlickSlider() {
    const settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="relative py-6">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="relative w-full h-[250px]">
                        <div
                            className="w-full h-full bg-cover bg-center rounded-lg overflow-hidden"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        >
                            {/* 블랙 처리 */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-lg"></div>
                            <div className="absolute px-3 py-2 text-white rounded-md text-large bottom-12 left-5">
                                {slide.title}
                            </div>
                            <div className="absolute px-3 py-2 text-xl text-white rounded-md bottom-4 left-5">
                                {slide.caption}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* 슬라이드 이미지 간격 조절 */}
            <style jsx global>{`
                .slick-list {
                    overflow: hidden; /* 블랙 처리한 부분이 슬라이드 내에서만 보이도록 설정 */
                }
                .slick-slide > div {
                    margin: 0 10px; /* 슬라이드 간격 */
                }
            `}</style>
        </div>
    );
}
