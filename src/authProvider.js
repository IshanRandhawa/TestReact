const authProvider = {
        login: ({ username, password }) =>  {
        const request = new Request('http://127.0.0.1:8000/api-token-auth/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                console.log(auth)
                Promise.resolve();
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },

    checkError: error => Promise.reject(),
    checkAuth: ({ username = 'Ishan', password ='Ishan18m@' }) =>  {
        console.log(username, password)
        const request = new Request('http://127.0.0.1:8000/api-token-auth/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('Token', JSON.stringify(auth));
                console.log(auth)
                Promise.resolve();
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),

};

export default authProvider;
