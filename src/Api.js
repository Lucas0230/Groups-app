

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
        let { token, _id, name } = await response.json();
        return { token, _id, name };
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
    addUser: async (userId, groupId) => {
        const { ok } = await fetch(API + '/groups', {
            method: 'PUT',
            body: JSON.stringify({ userId, groupId }),
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
    getGroups: async (id, name, tag) => {

        let url = '/groups?';

        if (id) {
            url += `id=${id}&`
        }

        if (name) {
            url += `name=${name}&`
        }

        if (tag) {
            url += `tag=${tag}&`
        }

        console.log(url)
        const response = await fetch(API + url, {
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

    },
    getUser: async (userId) => {
        const response = await fetch(API + `/users/${userId}`, {
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