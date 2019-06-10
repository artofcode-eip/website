import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { withTranslation } from 'react-i18next';

import "./Pricing.css";

class Pricing extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="PricingPage d-flex justify-content-center">
        <MDBCard className="Card">
            <MDBCardBody>
            <MDBCardTitle>{t('Pricing.TitleCard1')}</MDBCardTitle>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "4vw" }} />
            <MDBCardText>
              {t('Pricing.TextCard1')}
            </MDBCardText>
            <MDBBtn href="#">{t('Pricing.ButtonCard')}</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="Card">
            <MDBCardBody>
            <MDBCardTitle>{t('Pricing.TitleCard2')}</MDBCardTitle>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "4vw" }} />
            <MDBCardText>
              {t('Pricing.TextCard2')} <br/>
            </MDBCardText>
            <MDBBtn href="#">{t('Pricing.ButtonCard')}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default withTranslation()(Pricing);