import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";

const InfoPage = () => {

    return (
        <>
            <Header/>
            <div className="info-page h-screen flex justify-center items-center bg-custom-dark text-custom-light">
                <h1>Info Page</h1>
            </div>
        </>
    )
}

export default InfoPage;
