const TOKEN_KEY = 'user-token';

export const login = (value: string) => {
    if (value.length) return localStorage.setItem(TOKEN_KEY, value);
}

export const token = () => {
    return localStorage.getItem(TOKEN_KEY) || "";
}

export const logout = () => {
    return localStorage.removeItem(TOKEN_KEY);
}

export const isUserLoggedIn = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}
