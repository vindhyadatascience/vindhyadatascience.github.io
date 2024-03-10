// Styles
import "./News.scss";
import 'swiper/css';

// Components
import { useState, useEffect } from 'react';
import { getRandomGradient } from "../utils";
import ReadMore from './ReadMore';
// import Markdown from 'react-markdown';

export default ({data}) => {
    const [cards, setCards] = useState([]);
    const [cardStyles, setCardStyles] = useState([]);
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

    // Replace missing news images with random color gradients
    // after loading the cards.
    useEffect(() => {
        var initialHue = 0;
        var newCardStyles = cards.map((card) => {
            var grad = getRandomGradient(initialHue);
            initialHue = grad[2];
            return {background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})`};
        });
        setCardStyles(newCardStyles);
    }, [cards]);

    // Generate the news items
    const newsItems = cards.map((card, index) => {

        const links = card.links.map((link, idx) => {
            return (
                <span key={idx}>
                    <a key={idx} href={link.url} className="news-links">{link.text}</a>
                    {idx < card.links.length - 1 ? <span className="news-link-separator">&nbsp;•&nbsp;</span> : null}
                </span>
            )
        });

        return (
            <div key={index} className="news-item">
                <div className="news-item-image" style={cardStyles[index]}>
                    {card.imageUrl != "" ? (
                        <img src={card.imageUrl} alt={card.title} />
                    ) : <span className="material-symbols-outlined icon">news</span>}
                </div>
                <hgroup>
                    {card.title ? <h3>{card.title}</h3> : null}
                    {card.description ? <ReadMore maxCharacterCount={247}>{card.description}</ReadMore> : null }
                    {/* {card.link ? <a href={card.link}>Learn more</a> : null} */}
                    {links}
                </hgroup>
            </div>
        )
    });

    // Calculate total number of pages
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    const currentItems = newsItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleBefore = () => { 
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>
            <div id="news" className="container">
                <div className="layout-news-grid">
                    {currentItems}
                </div>
            </div>

            <div className="news-pagination">
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


