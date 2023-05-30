import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";


export default function Home() {
    return (
    <>                     
    <Hero>
        <Banner title="Luxurious Pet Rooms" subtitle="Deluxe room starting at ₹999">
            <Link to="/rooms" className="btn-primary">
                Our Rooms
            </Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms />
    </>
    );
}

/*
<Hero hero="defaultHero" />;
Hero.defaultProps = {
    hero: "defaultHero"
};*/