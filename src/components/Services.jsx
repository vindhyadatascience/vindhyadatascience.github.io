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
                    
                    <h1>Bring your research to the next level</h1>
                    <h2>
                        Our team loves big data and solving challening problems.
                        We engage in a wide range of projects, from small-scale
                        analysis to large-scale, multi-year
                        collaborations.
                    </h2>
                </hgroup>
                <div>
                    <CardCarousel data="data/services.json" />
                </div>
            </div>
        </>
    )
}


