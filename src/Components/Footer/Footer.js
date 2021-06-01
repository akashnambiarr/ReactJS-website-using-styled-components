import React from 'react'
import {FooterContainer,
FooterSubHeading,
FooterSubscription,
FooterSubText} from './Footer.element';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exculsive memebership
                         to receive the latest news and trends
                    </FooterSubHeading>
                    <FooterSubText>
                        You can Unsubscribe at any time.
                    </FooterSubText>
                </FooterSubscription>
            </FooterContainer>
        </>
    );
};

export default Footer
