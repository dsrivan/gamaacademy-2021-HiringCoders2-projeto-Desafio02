import React from 'react';

import * as S from './styled';

import { ShoppingCart } from '@material-ui/icons';

const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.30,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        "category": "men's clothing",
        // "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling.",
        "category": "men's clothing",
        //"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed.",
        "category": "men's clothing",
        //"image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695.00,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed.",
        "category": "jewelery",
        //"image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168.00,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed.",
        "category": "jewelery",
        //"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        //"image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        //"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64.00,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.",
        "category": "electronics",
        //"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109.00,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications.)",
        "category": "electronics",
        //"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109.00,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance..",
        "category": "electronics",
        //"image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114.00,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        //"image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599.00,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI.",
        "category": "electronics",
        //"image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration.",
        "category": "electronics",
        //"image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional.",
        "category": "women's clothing",
        //"image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One.",
        "category": "women's clothing",
        //"image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes.",
        "category": "women's clothing",
        //"image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching.",
        "category": "women's clothing",
        //"image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture.",
        "category": "women's clothing",
        //"image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School.",
        "category": "women's clothing",
        //"image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
        "image": "https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"
    }
]

const user = {
    name: 'Ivan Rosa',
    email: 'iivan.si@msn.com',
    city: 'Cosmorama',
    phone: '17996022603'
}

function App() {

    function byItem(e) {
        const position = e.target.getAttribute('data-position-product');

        let newItem = {
            dataUser: user,
            purchaseItem: {
                "id": products[position].id,
                "title": products[position].title,
                "price": products[position].price,
                "description": products[position].description,
                "category": products[position].category,
                "image": products[position].image
            }
        }

        // console.log(newItem);

        localStorage.setItem("purchaseN_" + products[position].id, JSON.stringify(newItem));
    }

    return (
        <S.FullContainer>
            <S.Container>
                <S.Logo>eStore</S.Logo>
                <S.Navbar>
                    <S.Navigation>
                        <S.NavigationItem>Link</S.NavigationItem>
                        <S.NavigationItem>Link</S.NavigationItem>
                        <S.NavigationItem>
                            <ShoppingCart color="dark"></ShoppingCart>
                        </S.NavigationItem>
                    </S.Navigation>
                </S.Navbar>
            </S.Container>

            <S.Banner>
                <S.BannerTextsImage>
                    <S.BannerTexts>
                        <S.BannerSubTitle>Algum subtítulo</S.BannerSubTitle>
                        <S.BannerTitle>Título do banner</S.BannerTitle>
                        <S.BannerText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi necessitatibus pariatur...
                        </S.BannerText>
                        <S.BannerButton>
                            Comprar
                        </S.BannerButton>
                    </S.BannerTexts>
                    <S.BannerImage>
                        <S.BannerImageImg src="https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"></S.BannerImageImg>
                    </S.BannerImage>
                </S.BannerTextsImage>
            </S.Banner>

            <S.OurOffers>
                <S.OurOffersTitle>
                    Nossas ofertas
                </S.OurOffersTitle>
            </S.OurOffers>

            <S.Offers>
                {products.map((product, key) => {
                    return (
                        <S.OffersItem key={product.id}>
                            <S.OffersItemImage src={product.image} alt="imagem"></S.OffersItemImage>
                            <S.OffersItemCategory>
                                {product.category}
                            </S.OffersItemCategory>
                            <S.OffersItemTitle>
                                {product.title}
                            </S.OffersItemTitle>
                            <S.OffersSeeDescription>
                                Ver descrição
                            </S.OffersSeeDescription>
                            {/* <S.OffersItemDescription className="offersItemDescription">{(product.description).toString().substring(0, 130) + "..."}</S.OffersItemDescription> */}
                            <S.OffersItemDescription className="offersItemDescription">
                                {(product.description).toString()}
                            </S.OffersItemDescription>
                            <S.OffersItemPrice>
                                R$ {parseFloat(product.price).toFixed(2)}
                            </S.OffersItemPrice>
                            <S.OffersItemButton data-position-product={key} onClick={byItem}>
                                Comprar
                                <ShoppingCart color="dark" className="noEvents" />
                            </S.OffersItemButton>
                        </S.OffersItem>
                    );
                })}
            </S.Offers>

            <S.Footer>
                Ivan Rosa
            </S.Footer>

        </S.FullContainer>
    );
}

export default App;