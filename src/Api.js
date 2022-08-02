

import { API } from '@env';

export const Api = {

    signIn: async (email, password) => {
        const response = await fetch(API + '/auth', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        })

        let { token } = await response.json();
        return { token };
    },
    signUp: async (newUser) => {
        const { ok } = await fetch(API + '/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return { ok };
    },
    checkToken: async (token) => {
        const response = await fetch(API + '/auth/refresh', {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let { name, email, choices, phone } = await response.json();
        return { name, email, choices, phone };
    },
    getGroups: async () => {
        const response = await fetch(API + '/groups', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let res = await response.json();
        return res;

    },
    getChatConversations: async (groupId) => {
        const response = await fetch(API + `/chats/${groupId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let res = await response.json();
        return res;

    }
}