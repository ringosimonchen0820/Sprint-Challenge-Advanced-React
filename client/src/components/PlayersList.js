import React from 'react';

import PlayerCard from './PlayerCard';

const PlayersList = (props) => {
    return (
       props.players.map(player =>(
           <PlayerCard 
                key={player.id}
                player={player}
           />
       )) 
    );
}

export default PlayersList;