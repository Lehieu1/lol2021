import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Champion(props) {
    const { hero } = props
    const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${hero}_0.jpg`
    const style = {
        backgroundImage: `url(${url})`,
        height: '300px',
        backgroundSize: 'cover'
    }
    return (
        <div style={style} className='champion'>
            <div className='name'>
                <Link to={hero}>{hero}</Link>
            </div>

        </div>
    );
}

export default Champion;