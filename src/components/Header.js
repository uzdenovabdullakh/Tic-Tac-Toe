import React from 'react';

const styles = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 700,
    fontSize: '2rem',
    color: 'black',
    textAlign: 'center',
}

function Header(props) {
    const {move} = props;
    return (
        <div style={styles}>
            <p>{move}</p>
        </div>
    );
}

export default Header;