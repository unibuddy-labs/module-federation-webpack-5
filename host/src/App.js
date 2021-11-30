import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("remote/App"));

const App = () => {
    return (
        <div
            style={{
                margin: "10px",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "greenyellow",
            }}
        >
            <h1>I am the host application!</h1>
            <Suspense fallback={"loading..."}>
                <RemoteApp />
            </Suspense>
        </div>
    );
};

export default App;
