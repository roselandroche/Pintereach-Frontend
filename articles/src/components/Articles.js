import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addArticle } from '../action/articles';

import api from '../utils/api';


function Articles(props) {

    useEffect(() => {
        props.addArticle();
    }, []);


    return (
        <div>
            
        </div>

        //  {props.isTitleLoading ? (
        //     <div className='spinner' />
        // )}
    )
}

function mapStateToProps(state) {
    return {
        isTitleLoading: state.title.isLoading,
    }
}

const mapDispatchToProps = {
    addArticle
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);
