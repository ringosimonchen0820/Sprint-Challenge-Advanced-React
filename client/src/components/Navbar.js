import React from 'react';

import Search from './Search';

const Navbar = (props) => {
    return (
        <Search players={props.players} />
    );
}

export default Navbar;