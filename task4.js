// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

export const delUser = async (id) => {
    try {
        const response = await fetch(`${getServerURL()}/users/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(`Se elemino el usuario con id ${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }

}