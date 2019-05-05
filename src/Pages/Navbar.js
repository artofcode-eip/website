import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";

export class Navbar extends Component {
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
export default withTranslation()(Navbar);