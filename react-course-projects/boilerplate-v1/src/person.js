const isAdult = (x) => {
    if (x < 18) {
        return false;
    } else {
        return true;
    }
};

const canDrink = (x) => {
    if (x < 18) {
        return false;
    } else {
        return true;
    }
};

const isSenior = (age) => {
    if (age > 65) {
        return true;
    } else {
        return false;
    }
};
 
export { isAdult, canDrink, isSenior as default };