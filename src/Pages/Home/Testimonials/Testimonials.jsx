import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className="mt-20">
            <SectionTitle
                heading={"What Our Clients Say"}
                subHeading={"TESTIMONIALS"}
            >
            </SectionTitle>
            <div className="mt-10 lg:mx-24">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="m-24 flex flex-col items-center space-y-3">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />

                                <p className="text-gray-700 text-sm lg:text-[18px]">{review.details}</p>
                                <h1 className="text-3xl text-[#BB8506]">{review.name}</h1>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;