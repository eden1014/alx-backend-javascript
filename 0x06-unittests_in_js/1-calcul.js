function calculateNumber (type, a, b,) {
    if (type == 'SUM'){
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    return roundedA + roundedB;
    }else if(type == 'SUBTRACT'){
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
    
        return roundedA - roundedB; 
    }else if (type == 'DIVIDE'){
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
        if(roundedB == 0){
            return 'error';
        }else {
            return roundedA / roundedB;
        }
        
        
    }
}
module.exports = calculateNumber;