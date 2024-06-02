import randomstring from 'randomstring';

export const generateRandomString = () => {
    let result = randomstring.generate();
    return result;
};
