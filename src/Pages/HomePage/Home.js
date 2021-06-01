import React from 'react'
import {homeObjOne} from './Data';
import {InfoSection} from '../../Components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home
