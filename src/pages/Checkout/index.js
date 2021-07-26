import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

function Checkout() {
    return (
        <>
            <h1>Checkout</h1>
            <S.LinkHome to="/">Home</S.LinkHome>
        </>
    );
}

export default Checkout;