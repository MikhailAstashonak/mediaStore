// I use this function to get current url

const urlGetter = () => {
    const currentUrl = window.location.href;
    const regex = /http:\/\/localhost:3000\//;
    const regUrl = currentUrl.match(regex);
    return currentUrl.split(regUrl).join('');
}
export {urlGetter};