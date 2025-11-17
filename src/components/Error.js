import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>Please try again later.</p>
            <h3>{err.statusText}</h3>
        </div>
    )
}
export default Error;