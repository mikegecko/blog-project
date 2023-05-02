import { Route } from "react-router-dom";
import Home from "./Home";

export default function Root () {
    return(
        <>
        <h1>Root</h1>
        <Route path="/home" element={<Home />} />
        </>
    )
}

export async function rootLoader () {
    return null;
}