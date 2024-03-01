// Import styles
import './HighlightBanner.scss';

export default () => {
    return (
        <>
            <div className='highlight-banner'>
                <div className='container-fluid'>
                    <div className='banner-grid'>
                        <span>
                            Vindhya is a US Data Science company based in MA & NC
                        </span>
                        <div className='grid centered-spans'>
                            <span>
                                100+ years of experience
                            </span>
                            <span>
                                100+ combined publications
                            </span>
                            <span>
                                Diverse scientific backgrounds
                            </span>
                        </div>
                        <div className='divider'>&nbsp;</div>
                        <span>
                            Contact us today at {" "}
                            <a href="mailto:info@vindhyadatascience">
                                info@vindhyadatascience.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
