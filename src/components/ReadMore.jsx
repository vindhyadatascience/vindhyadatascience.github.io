// Import components
import React, { useState } from 'react';

// Import styles
import "./ReadMore.scss"

export default ({ children, maxCharacterCount = 100 }) => {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
    }

    return (
        <p>
            {resultString}

            {isTruncated ? (
                <span onClick={toggleIsTruncated} className="expand-link">
                    &nbsp; ...Read more
                </span>
            ) : (
                    <p onClick={toggleIsTruncated} className="expand-link">
                    Show less
                </p>
            )}
        </p>
    );
}
