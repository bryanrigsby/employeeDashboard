// util.js
export const getAge = (dob) => {
    let age = 30;
    console.log('dob',dob);
    return age;
}

export const generateRandomAlphaNumeric = (length=10) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
}