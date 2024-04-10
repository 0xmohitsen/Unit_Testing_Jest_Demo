import helper from './helper';

const execute = () => {
    const result = helper();

    if(result){
        return "Hi";
    } else {
        return "Bye";
    }
}

export default execute;