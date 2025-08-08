export const API = {
    async login(username, password) {
        const res = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (!res.ok) return null;

        const data = await res.json();
        localStorage.setItem('token', data.token);
        return data;
    },

    async getProfile() {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:4000/api/profile', {
            headers: { Authorization: 'Bearer ' + token }
        });
        return res.ok ? await res.json() : null;
    }
};