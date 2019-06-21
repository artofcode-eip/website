import React from "react";
import { withTranslation } from 'react-i18next';

import "./HomePage.css";

export class HomePage extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div style={{ marginTop: "2.5em" }}>
                <div className="FirstPage">
                    <img className="logo mx-auto d-block img-fluid" alt="ArtofCode" src="logo.png" />
                </div>
                <div className="SecondPage">
                    <h1 className="Title">{t('HomePage.Title_Desc')}</h1>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto bar" />
                    <p className="TextZone">{t('HomePage.Desc')}</p>
                </div>
                <div className="ThirdPage">
                    <h1 className="Title">{t('HomePage.Title_Valeur')}</h1>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto bar" />
                    <p className="TextZone">{t('HomePage.Valeur')}</p>
                </div>
            </div>
        );
    }
}
export default withTranslation()(HomePage);