import * as React from 'react';
import Cards from '../Components/cards'
import Slider from '../Components/Slider'
import FirstHeader from '../Components/FirstHeader'
import CircularCards from '../Components/CircularCards'
import ScreenTest from '@/Components/ScreeningTest';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Divider from '@mui/material/Divider';
import {cardsArray,screenTests,circularCardsArray,notFeelingwell,Texts} from '../utils/predefinedUtils'

export default function Home() {
    return (
        <>
            <Header/>
            <FirstHeader/>
            <Cards cardsArray={cardsArray} />
            <Divider variant="middle" />
            <CircularCards cardsArray={notFeelingwell} cardHeading={Texts.NFW_HEADING} cardSubHeading={Texts.NFW_SUB_HEADING}/>
            <Slider/>
            <CircularCards cardsArray={circularCardsArray} cardHeading={Texts.SURGERIES_TEXT}/>
            <Divider variant="middle" sx={{marginTop:3}} />
            <ScreenTest cardsArray={screenTests} cardHeading={Texts.ST_HEADING} cardSubHeading={Texts.ST_SUB_HEADING}/>
            <Divider variant="middle" />
            <Footer/>
        </>
    );
}