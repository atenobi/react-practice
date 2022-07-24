import React from "react";
import PropTypes from 'prop-types';

const PropsComponent = ({ person }) => {
    return (
        <div className="component-container">
            <h4>props component</h4>
            <p>{person.name}</p>
        </div>
    )
};

PropsComponent.propTypes = {
    person: PropTypes.object.isRequired,
}

export default PropsComponent;