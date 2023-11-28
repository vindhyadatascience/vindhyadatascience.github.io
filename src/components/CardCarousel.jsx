// Import components
import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';

// Import styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CardCarousel.scss';

export default ({data}) => {
    const [cards, setCards] = useState([]);

    async function fetchCards() {
        const response = await fetch(data);
        const result = await response.json();
        setCards(result);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={25}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                className="swiper-container"
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id} className="swiper-slide">
                        <article className='card'>
                            <h3>{card.title}</h3>
                            <ul>
                                {card.content.map((item) => (
                                    <li key={item} className='bullet'>{item}</li>
                                ))}
                            </ul>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
