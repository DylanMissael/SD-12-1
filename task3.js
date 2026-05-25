// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

export const addUser = async (first_name, last_name, email) => {
    const newUser = {
        first_name,
        last_name,
        email
    }

    try {
        const response = await fetch(`${getServerURL()}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }

}