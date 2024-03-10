// Import components
import React, { useState } from 'react';

// Import styles
import "./ReadMore.scss"

export default ({ children, maxCharacterCount = 100, textClass }) => {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
    }

    function showReadMoreLink() {
        if (isTruncated) {
            return (
                <span onClick={toggleIsTruncated} className="expand-link">
                    &nbsp; ...Read more
                </span>
            );
        } else {
            return (
                <p onClick={toggleIsTruncated} className="expand-link">
                    Show less
                </p>
            );
        }
    }
    
    return (
        <p className={textClass} style={{whiteSpace: "pre-line"}}>
            {resultString}
            {text.length < maxCharacterCount ? null : showReadMoreLink()}
        </p>
    );
}
