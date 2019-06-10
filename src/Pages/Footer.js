import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

export class Footer extends Component {
    render() {
        const { t } = this.props;
        return (
            <MDBFooter color="unique-color-dark" className="page-footer font-small">
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>{t('Footer.Title_Desc')}</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>{t('Footer.Desc')}</p>
                        </MDBCol>
                        <MDBCol className="mb-4"></MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>{t('Footer.Social')}</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fab fa-facebook-f"></i><a target="_blank" rel="noopener noreferrer" className="px-md-3 py-md-2" href="https://www.facebook.com/Art-Of-Code-2373428686047793/">Facebook</a>
                            </p>
                            <p>
                                <i className="fab fa-twitter"></i><a target="_blank" rel="noopener noreferrer" className="px-md-2 py-md-2" href="#!">Twitter</a>
                            </p>
                            <p>
                                <i className="fab fa-github"></i><a target="_blank" rel="noopener noreferrer" className="px-md-2 py-md-2" href="#!">Github</a>
                            </p>
                            <p>
                                <i className="fab fa-gitlab" ></i><a target="_blank" rel="noopener noreferrer" className="px-md-2 py-md-2" href="https://gitlab.com/art_of_code">Gitlab</a>
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>{t('Footer.Contact')}</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fa fa-envelope mr-3" /> artofcode_2021@labeip.eu
                        </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} ArtofCode
                </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}
export default withTranslation()(Footer);