export const login = (credentials) => {
    return {
        type: 'auth/login',
        payload: credentials
    };
};
