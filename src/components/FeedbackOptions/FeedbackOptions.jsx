import React from "react";
import PropTypes from 'prop-types';

// import css from 'FeedbackOptions.module.css';

export  const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            <ul>
                {options.map((option) => (
                    <li key={option}>
                        <button className={option}
                            type="button"
                            onClick={onLeaveFeedback}>
                                {option}
                        </button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    // onLeaveFeedback: PropTypes.string.isRequired,
}