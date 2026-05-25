// Task 2: listUsers()

import { getServerURL } from "./task1.js";


export const listUsers = async () => {
    try {
        const response = await fetch(`${getServerURL()}/users`);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}

