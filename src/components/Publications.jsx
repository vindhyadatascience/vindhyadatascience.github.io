// Styles
import "./Publications.scss";
import 'swiper/css';

// Components
import { useState, useEffect } from 'react';

export default ({data}) => {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    async function fetchCards() {
        const response = await fetch(data);
        const result = await response.json();
        setCards(result);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    // Generate the pubs items
    const pubItems = cards.map((card, index) => {

        return (
            <a key={index} className="pubs-article-link" href={card.link}>
                <article className="pubs-article">
                    <div className="grid">
                        <div className="pub-image-container">
                            <img src={card.imageUrl}></img>
                        </div>
                        <div className="pub-content-container">
                            <span className="year-tag">{card.year}</span><br />
                            {card.title}
                        </div>
                    </div>
                </article>
            </a>
        )
    });

    // Calculate total number of pages
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    const currentItems = pubItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleBefore = () => { 
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            // necessary to trigger hash change
            window.location.hash = "#pubs" + currentPage; 
            window.location.hash = "#pubs";
        }
    }
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            // necessary to trigger hash change
            window.location.hash = "#pubs" + currentPage;
            window.location.hash = "#pubs";
        }
    }

    return (
        <>
            <div id="pubs-content" className="container">
                <div className="layout-pubs-grid">
                    {currentItems}
                </div>
            </div>

            <div className="pubs-pagination">
                <div className="newer">
                    <button onClick={handleBefore} disabled={currentPage === 1}>
                        <span className="material-symbols-outlined">
                            arrow_circle_left
                        </span>
                        &nbsp;
                        <span>Newer</span>
                    </button>
                </div>

                <div>
                    <span>Page {currentPage}/{totalPages}</span>
                </div>

                <div className="older">
                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                        <span>Older</span> 
                        &nbsp;
                        <span className="material-symbols-outlined">
                            arrow_circle_right
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}


