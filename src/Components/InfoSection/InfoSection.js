import React from 'react'
import { Container, Button } from '../../globalStyles'
import {Link} from 'react-router-dom';

import {InfoSec, InfoColumn,InfoRow,TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        ImgWrapper,
        Img

} from './InfoSection.elements';

const InfoSection = ({lightBg, imgStart,lightTopLine,lightTextDesc
    ,description,headLine,lightText,topLine,buttonLabel,primary
    ,img,start,alt}) => {
    return (
        <>
            <InfoSec lightBg = {lightBg}>
                <Container>
                    <InfoRow imgStart = {imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine ={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc = {lightTextDesc}>{description}</Subtitle>
                                <Link to= '/sign-up'>
                                    <Button big fontBig primary = {primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>

                            <ImgWrapper start = {start}>
                                <Img src ={img} alt = {alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection
