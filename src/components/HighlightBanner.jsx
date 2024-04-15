// Import styles
import './HighlightBanner.scss';

export default () => {
    return (
        <>
            <div className='highlight-banner'>
                <div className='container-fluid'>
                    <div className='banner-grid'>
                        <span>
                            Vindhya is a US Data Science company based in <a href="https://www.rtp.org/">RTP</a> and Boston
                        </span>
                        <div className='grid centered-spans'>
                            <span>
                                <span className='large-text'>100+</span><br /><span className='small-text'>years of experience</span>
                            </span>
                            <span>
                                <span className='large-text'>150+</span><br /><span className='small-text'>combined publications</span>
                            </span>
                            <span>
                                <span className='large-text'>73+</span><br /><span className='small-text'>successful projects</span>
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
