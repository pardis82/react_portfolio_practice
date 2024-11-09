import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination } from 'swiper/modules';


const data = [
    {
        id: 1,
        image: AVT1,
        title: 'Client testimonials',
        name: 'Sarah',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing'

    },
    {
        id: 2,
        image: AVT2,
        title: 'Client testimonials',
        name: 'Jack',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing'

    },
    {
        id: 3,
        image: AVT3,
        title: 'Client testimonials',
        name: 'Tom',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing'


    },
    {
        id: 4,
        image: AVT4,
        title: 'Client testimonials',
        name: 'Fatima',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing'


    },



]

const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ id, image, title, name, review }) => {
                        return (
                            <SwiperSlide key={id} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={image} alt={title} />
                                    <h3>{title}</h3>
                                </div>

                                <h5 className='clinet__name'>{name}</h5>
                                <small className='client__review'>{review}</small>

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>


        </section>
    )
}

export default testimonials