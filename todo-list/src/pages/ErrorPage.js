import '../css/Page.css';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="page">
            <div className="container">
                <div className="detail-container">
                    <h1>This is Error Page</h1>
                    <div><h2>Error Status: {error.statusText}</h2></div>
                    <div><h2>Error Message: {error.message}</h2></div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;