export const storedData = (data) => {
            sessionStorage.setItem('token', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data.user));
};
export const clesrData = () => {
    localStorage.clear();
    sessionStorage.clear();
};
