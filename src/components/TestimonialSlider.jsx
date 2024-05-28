// Styles
import "./TestimonialSlider.scss"

// Components
import { useState, useEffect } from 'react';


export default () => {

    const [testimonials, setTestimonials] = useState([]);
    const [index, setIndex] = useState(0);

    async function fetchTestimonials() {
        const response = await fetch('data/testimonials.json');
        const data = await response.json();
        setTestimonials(data);
    }

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const handleBefore = () => {
        (index > 0 ? setIndex(index - 1) : setIndex(testimonials.length - 1))
        
    }

    const handleNext = () => {
        (index >= (testimonials.length - 1) ? setIndex(0) : setIndex(index + 1))
        
    }

    const testimonialList = testimonials.map((t, i) => {
        return (
            <>
                <div className="testimonial-layout">
                    <a className="navigation" onClick={handleBefore}>
                        <span className="material-symbols-outlined">
                            navigate_before
                        </span>
                    </a>
                    <blockquote key={i} className="quote">
                        <q>{t.quote}</q>
                        <hgroup style={{ textAlign: "right", marginBottom: "0px" }}>
                            <h6>{t.client},</h6>
                            <h6>{t.company}</h6>
                        </hgroup>
                    </blockquote>

                    <a className="navigation" onClick={handleNext}>
                        <span className="material-symbols-outlined">
                            navigate_next
                        </span>
                    </a>
                </div>
            </>

        )
    });

    return (
        <>
            {testimonialList[index]}
        </>
    )
}