import '../css/Page.css';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="page">
            <h1>This is Error Page</h1>
            <div>Error Status: {error.statusText}</div>
            <div>Error Message: {error.message}</div>
        </div>
    );
};

export default ErrorPage;