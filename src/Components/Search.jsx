import React, { useState } from 'react';
import '../App.css';

function Search(props) {
    const { func } = props;
    const [Name, setName] = useState('');
    const HandleChangeInput = e => {
        setName(e.target.value);
        func(e.target.value);
    }


    return (
        <div className="form" >
            <input type="text" placeholder="  Nhập tướng cần tìm kiếm..." value={Name} onChange={HandleChangeInput} />
        </div>
    );
}

export default Search;