import React from 'react';
import { withTranslation } from 'react-i18next';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBView } from "mdbreact";

import { useTranslation } from 'react-i18next';

export function Navbar() {
    const { i18n, t } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };


    return (
        <MDBContainer>
            <MDBNavbar style={{ "background-color": "white" }} light expand="md" fixed="top" scrolling>
                <MDBNavbarBrand href="/">{t('NavBar.Title')}</MDBNavbarBrand>
                <MDBNavbarToggler />
                <MDBCollapse navbar>
                    <MDBNavbarNav right className="r-4 l-4">
                        <MDBNavItem>
                            <MDBView hover zoom className="flex-center">
                                <img className="d-block img-fluid ml-2 mr-2" onClick={() => changeLanguage('en')} alt="ArtofCode" src="EnIcon.png" />
                            </MDBView>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBView hover zoom className="flex-center">
                                <img className="d-block img-fluid ml-2 mr-2" onClick={() => changeLanguage('fr')} alt="ArtofCode" src="FrIcon.png" />
                            </MDBView>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="px-md-4" to="/">
                                <i className="fas fa-home"></i>{t('NavBar.Home')}
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="px-md-4" to="Pricing">
                                <i className="fas fa-dollar-sign"></i>{t('NavBar.Price')}
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </MDBContainer>
    );
}
export default withTranslation()(Navbar);

/*
export class Navbar extends Component {
    const { i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    render() {
        const { t } = this.props;

        return (
            <MDBContainer>
                <MDBNavbar light expand="md" fixed="top" scrolling>
                    <MDBNavbarBrand href="/">{t('NavBar.Title')}</MDBNavbarBrand>
                    <MDBNavbarToggler />
                    <MDBCollapse navbar>
                        <MDBNavbarNav right className="r-4 l-4">
                            <MDBNavItem>

                                <MDBBtn color="elegant" fixed="top" style={{ marginTop: "5em" }} onClick={() => changeLanguage('en')}>en</MDBBtn>
                                <MDBBtn color="elegant" fixed="top" onClick={() => changeLanguage('fr')}>fr</MDBBtn>

                                <MDBNavLink className="px-md-4" to="/">
                                    <i className="fas fa-home"></i>{t('NavBar.Home')}
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="px-md-4" to="Pricing">
                                    <i className="fas fa-dollar-sign"></i>{t('NavBar.Price')}
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </MDBContainer>
        );
    }
}
export default withTranslation()(Navbar);*/