// Styles
import "./Services.scss";
import 'swiper/css';

// Components
import SmallHeading from "./SmallHeading";
import CardCarousel from "./CardCarousel";

export default () => {
    return (
        <>
            <div className='grid layout-grid'>
                <hgroup>
                    <SmallHeading symbol="biotech" text="Services" />
                    
                    <h2>Bring your research to the next level</h2>
                    <p>
                        Our team loves big data and solving challenging problems.
                        We engage in a wide range of projects, from small-scale
                        analysis to large-scale, multi-year
                        collaborations.
                    </p>
                </hgroup>
                <div>
                    <CardCarousel data="data/services.json" />
                </div>
            </div>
        </>
    )
}


