import React from 'react';

import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'rose',
            thumbnailUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/d/0/2dd000bcd585f01edd235c0c3f21c2f9.jpg'
        },
        {
            id: 2,
            name: 'rose',
            thumbnailUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/d/0/2dd000bcd585f01edd235c0c3f21c2f9.jpg'
        },
        {
            id: 3,
            name: 'rose',
            thumbnailUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/d/0/2dd000bcd585f01edd235c0c3f21c2f9.jpg'
        },
    ];
    

    return (
        <div>
            <h2>Co the ban se thich</h2>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumFeature;