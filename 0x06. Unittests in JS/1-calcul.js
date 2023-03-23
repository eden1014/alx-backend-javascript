function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    if (type == "SUM"){
        const c = an + bn;
        return c;
    } 
    else if (type == "SUBTRACT"){
        const c = an - bn;
        return c;
    }
    else if (type == "DIVIDE"){
        if (bn == 0){
        return "Error";
        }
        const c = an / bn;
        return c;
    }
}

module.exports = calculateNumber;
