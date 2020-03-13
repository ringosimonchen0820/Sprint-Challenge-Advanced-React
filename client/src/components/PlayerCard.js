import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className='soccer-player'>
            <p className='player'>
                {props.player.name}
            </p>
            <p className='country'>
                {props.player.country}
            </p>
        </div>
    );
}

export default PlayerCard;