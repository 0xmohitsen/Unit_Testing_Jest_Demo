const fetchData = (callBack) => {
    setTimeout(() => {
        callBack('Pizza');
    },0);
}

const fetchPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Pizza'), 0);
    });
}

const fetchPromise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Pizza'), 0);
    });
}

module.exports = {
    fetchData,
    fetchPromise,
    fetchPromise1
}