import React from "react";
import { withTranslation } from 'react-i18next';

import "./HomePage.css";

export class HomePage extends React.Component {

  render() {
    const { t } = this.props;
    return (
      <div style={{ marginTop: "4em" }}>
        <div className="FirstPage">
            <img className="mx-auto d-block img-fluid" alt="" src="logo.png" />
        </div>
        <div className="SecondPage">
          <h1>{t('HomePage.Title_Desc')}</h1>
          <p>{t('HomePage.Desc')}</p>
        </div>
        <div className="ThirdPage">
          <h1>{t('HomePage.Title_Valeur')}</h1>
          <p>{t('HomePage.Valeur')}</p>
        </div>
      </div>
    );
  }
}
export default withTranslation()(HomePage);