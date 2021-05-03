import React from "react";
import * as userService from '../../utilities/users-service';

export default function OrderHistoryPage() {
    async function handleCheckToken() {
        userService.checkToken();
    }

    return  (
        <>
        <h1>OrderHistoryPage</h1>
        <button onClick={handleCheckToken}>Check when my login expires</button>
        </>
    )
}