
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section className=''>

            <SectionTitle
                heading={"From 11:00am to 10:00pm"}
                subHeading={"ORDER ONLINE"}>
            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={1}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}

                className="mySwiper rounded px-2 mt-20"
            >
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img1} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img2} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img3} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img4} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img5} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img1} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img2} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img3} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img4} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded lg:h-[450px]' src={img5} alt="" />
                    <h1 className='lg:text-3xl text-white uppercase text-center -mt-12'>Salad</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;