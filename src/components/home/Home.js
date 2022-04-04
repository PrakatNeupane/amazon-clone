import React from "react";
import { Product } from "../products/Product";
import "./Home.css";

export const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        title='The lean Startup'
                        price={29.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184l/10127019._SY475_.jpg"
                        rating={3}
                        id={Math.random()}
                    />
                    <Product
                        id={Math.random()}
                        title="Electric Stand Mixer, 900W 5.5L 6-Speed Tilt-Head Food Mixer, Portable Blender, Small Mini Food Blenders for Milkshake, Fruit Vegetables Drinks, Smoothie"
                        price={233.0}
                        image="https://assets.kogan.com/files/product/2019/KAVTBLST15B/KAVTBLST15B_01.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={Math.random()}
                        title="Xiaomi Mi Watch Lite GPS 1.4 Large Touch Screen Smartwatch 5 ATM Waterproof Sports Fitness Tracker with GPS Fitness Monitor Black AU Version (Ivory)"
                        price={79.99}
                        image="https://m.media-amazon.com/images/I/51vWhClC51L._AC_SL1500_.jpg"
                        rating={4} />
                    <Product
                        id={Math.random()}
                        title="Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal"
                        price={399.99}
                        image="https://m.media-amazon.com/images/I/61F+vLeNZFL._AC_SL1000_.jpg"
                        rating={5}
                    />
                    <Product
                        id={Math.random()}
                        title="2021 Apple iPad (10.2-inch iPad Wi-Fi, 64GB) - Space Grey (9th Generation)"
                        price={499.99}
                        image="https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC_SL1500_.jpg"
                        rating={4} />

                </div>
                <div className="home__row">
                    <Product
                        title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
                        price={499.99}
                        image="https://m.media-amazon.com/images/I/61UY5LzzA0L._AC_SL1500_.jpg"
                        rating={4} />

                </div>
            </div>
        </div>
    );
};
