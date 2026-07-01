// Import styles
import './HighlightBanner.scss';

export default () => {
    return (
        <div className='highlight-banner'>
            <div className='container-fluid'>
                <div className='banner-grid'>
                    <p className='banner-intro'>
                        Vindhya is a US Data Science company based in <a href="https://www.rtp.org/">RTP</a> and Boston
                    </p>
                    <div className='banner-stats'>
                        <div className='stat'>
                            <span className='stat-number'>100+</span>
                            <span className='stat-label'>years of experience</span>
                        </div>
                        <div className='stat'>
                            <span className='stat-number'>150+</span>
                            <span className='stat-label'>combined publications</span>
                        </div>
                        <div className='stat'>
                            <span className='stat-number'>73+</span>
                            <span className='stat-label'>successful projects</span>
                        </div>
                    </div>
                    <p className='banner-contact'>
                        Contact us today at{" "}
                        <a href="mailto:info@vindhyadatascience.com">info@vindhyadatascience.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
