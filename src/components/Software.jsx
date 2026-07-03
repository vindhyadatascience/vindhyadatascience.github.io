// Import components
import React, { useState, useEffect } from 'react';
import { LuGlobe } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';

// Import styles
import './Software.scss';

// Well-defined, optional links. Each renders with a leading icon when the
// product supplies a URL for that key. Icons come from react-icons, so every
// glyph is an SVG on the same grid and shares one sizing rule.
const LINK_TYPES = [
    {
        key: 'website',
        label: 'Website',
        icon: <LuGlobe className="software-link-icon" />,
    },
    {
        key: 'github',
        label: 'GitHub',
        icon: <SiGithub className="software-link-icon" />,
    },
];

export default ({ data }) => {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const response = await fetch(data);
        const result = await response.json();
        setProducts(result);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="layout-software-grid">
            {products.map((product) => (
                <div key={product.id} className="software-item">
                    <div className="software-item-image">
                        {product.logo && (
                            <img
                                className="software-logo"
                                src={product.logo}
                                alt={`${product.title} logo`}
                                loading="lazy"
                            />
                        )}
                    </div>
                    <hgroup>
                        {product.title && (
                            <h3>
                                <strong>{product.title}</strong>
                                {product.subtitle ? `: ${product.subtitle}` : ''}
                            </h3>
                        )}
                        {product.description && <p>{product.description}</p>}
                        <div className="software-links">
                            {LINK_TYPES.filter((type) => product[type.key]).map((type) => (
                                <a
                                    key={type.key}
                                    href={product[type.key]}
                                    className="software-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {type.icon}
                                    <span className="software-link-label">{type.label}</span>
                                </a>
                            ))}
                        </div>
                    </hgroup>
                </div>
            ))}
        </div>
    );
};
