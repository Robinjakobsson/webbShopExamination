import { useRouteError } from "react-router";
import "../css/error-page.css"

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>

            <button onClick={() => window.location.href = '#/library'}>Back to Library</button>
        </div>
    );
}
export default ErrorPage;