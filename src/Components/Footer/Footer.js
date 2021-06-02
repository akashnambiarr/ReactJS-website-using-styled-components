import React from 'react'
import { Button } from '../../globalStyles';
import {FooterContainer,
FooterSubHeading,
FooterSubscription,
FooterSubText,
FooterLinksItems,
Form,
FormInput,
FooterLinkContainer,
FooterLinksWrapper,
FooterLink,
FooterLinkTitle} from './Footer.element';

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
                    <Form>
                        <FormInput name ="email" type = "email" placeholder = "your email"/>
                            <Button fontBig>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to = "/sign-up">How it works</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Investors</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Terms and conditions</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>contact us</FooterLinkTitle>
                            <FooterLink to = "/">How it works</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Investors</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Terms and conditions</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to = "/">How it works</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Investors</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Terms and conditions</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social media</FooterLinkTitle>
                            <FooterLink to = "/">How it works</FooterLink>
                            <FooterLink to = "/">Careers</FooterLink>
                            <FooterLink to = "/">Investors</FooterLink>
                            <FooterLink to = "/">Testimonials</FooterLink>
                            <FooterLink to = "/">Terms and conditions</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
            </FooterContainer>
        </>
    );
};

export default Footer
