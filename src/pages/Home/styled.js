import styled from 'styled-components';

const maxWidth = "1200px";

export const FullContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Container = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    height: 100px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Navbar = styled.nav`
`;

export const Logo = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
`;

export const Navigation = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;

export const NavigationItem = styled.li`
    font-size: 1.1rem;
    margin-left: 1.5rem;
    font-weight: 500;
    cursor: pointer;
`;

export const Banner = styled.div`
    width: 100%;
`;

export const BannerTextsImage = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    padding: 1rem 2rem;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 'BannerTexts BannerImage BannerImage';
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;

    @media screen and (max-width: 768px) {
    grid-template-areas: 
    'BannerImage'
    'BannerTexts';
    }
`;

export const BannerTexts = styled.div`
    grid-area: BannerTexts;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3rem 1rem;
`;

export const BannerSubTitle = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 2rem 0 .3rem;
`;

export const BannerTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: .3rem 0;
    color: #b34c4c;
`;

export const BannerText = styled.p`
    font-size: 1rem;
    font-weight: 300;
    margin: .5rem 0 2rem;
`;

export const BannerButton = styled.button`
    display: inline;
    padding: 1rem 2rem;
    width: 200px;
    background-color: #262525;
    border-radius: 4px;
    border: 1px solid;
    border-color: #262525;
    color: #fff;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: #b34c4c;
        border-color: #b34c4c;
        box-shadow: 5px 5px 10px rgba(0,0,0,.5);
    }
`;

export const BannerImage = styled.div`
    grid-area: BannerImage;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const BannerImageImg = styled.img`
    width: 100%;
    height: auto;
`;

export const OurOffers = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    height: 100px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 0 2rem;
`;

export const OurOffersTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    position: relative;
    display: flex;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        width: 80px;
        height: 4px;
        background-color: red;
        top: -9px;
        border-radius: 4px;
    }
`;

export const Offers = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: 0 auto;
    padding: 1rem 1rem 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media screen and (max-width: 999px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 529px) {
        grid-template-columns: 100%;
    }
`;

export const OffersItem = styled.div`
    border-radius: 4px;
    padding: 1.5rem 1rem;
    border: 1px solid;
    border-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    transition: all .2s ease-in-out;
    
    &:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        border-color: rgba(0,0,0,0.1);

        & img {
            transform: scale(1.15);
        }

        & button {
            background-color: #b34c4c;
            border-color: #b34c4c;
        }
    }
`;

export const OffersItemImage = styled.img`
    width: 80%;
    height: auto;
    text-align: center;
    min-height: 220px;
    transition: all .2s ease-in-out;
`;

export const OffersItemCategory = styled.p`
    font-size: 0.7rem;
    margin: 1.5rem 1rem 0 1rem;
    font-weight: 700;
    color: #b34c4c;
    text-transform: uppercase;
    z-index: 2;
    background-color: #fff;
`;

export const OffersItemTitle = styled.p`
    font-size: 1rem;
    margin: .5rem 1rem 1rem;
    font-weight: 700;
`;

export const OffersItemDescription = styled.p`
    font-size: 0.89rem;
    margin: 1rem 1rem 0 1rem;
    color: gray;
`;

export const OffersItemPrice = styled.p`
    font-size: 1.2rem;
    margin: 1rem 1rem 0 1rem;
    font-weight: 700;
`;

export const OffersItemButton = styled.button`
    display: inline;
    padding: 1rem 2rem;
    width: 200px;
    background-color: #262525;
    border-radius: 4px;
    border: 1px solid;
    border-color: #262525;
    color: #fff;
    cursor: pointer;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
`;

export const Footer = styled.footer`
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    background-color: #353434;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;