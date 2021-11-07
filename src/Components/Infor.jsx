import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Infor.css';

function Infor(props) {
    const { hero } = props;
    const [Spells, setSpells] = useState([])
    const [Passive, setPassive] = useState({
        name: "Tái Sinh",
        description: "Sau1 khi bị hạ gục, Anivia hóa thành một quả trứng và hồi lại đầy bình máu.",
        image: {
            full: '',
            sprite: "passive0.png",
            group: "passive",
            x: 288,
            y: 0,
            w: 48,
            h: 48
        }
    })
    const [PassiveIMG, setPassiveIMG] = useState()
    const url_imghero = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${hero}_0.jpg`;
    useEffect(() => {
        const url = `https://ddragon.leagueoflegends.com/cdn/11.21.1/data/vn_VN/champion/${hero}.json`;
        axios.get(url)
            .then(res => {
                const data = res.data.data[hero];
                setSpells(data.spells)
                console.log(data.spells)
                setPassive(data.passive)
                setPassiveIMG(`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/passive/${data.passive.image.full}`)
            })
            .catch(err => console.log(err))

    }, [hero])
    return (
        <div className="Hero">
            <div className="img-hero">
                <h2>{hero}</h2>
                <img src={url_imghero} alt={hero} />

            </div>

            <div className="Spells">
                <div className="spell">
                    <img src={PassiveIMG} alt="Passive" />
                    <div className="infor">
                        <div>Nội tại: {Passive.name}</div>
                        <div>{Passive.description}</div>
                    </div>
                </div>

                {Spells.map(spell => {
                    let url = `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${spell.id}.png`
                    return (
                        <div className="spell">
                            <img src={url} alt={spell.id} key={spell.id} />
                            <div className="infor">
                                <div>{spell.name}</div>
                                <div>{spell.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Infor;