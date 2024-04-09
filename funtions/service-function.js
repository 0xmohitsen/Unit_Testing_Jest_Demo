const helper = () => {
    const number = Math.floor(Math.random() * 10);

    return number%2 == 0;
}

const execute = () => {
    const result = helper();

    if(result){
        return "Learning JS";
    } else {
        return "Not Learning JS";
    }
}

module.exports = {
    helper,
    execute
}