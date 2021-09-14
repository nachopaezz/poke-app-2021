// A a la Z
export function orderAZ (array) {
    return array.sort(function(a, b) {
        if(a.name < b.name){
            return -1;
        }
        if( a.name > b.name) {
            return 1;
        }
       return 0;
    });
};


// Z a la A
 export function orderZA(array) {
    return array.sort(function (a, b) {
        if(a.name < b.name) {
            return 1;
        }
        if( a.name > b.name) {
            return -1;
        }
        return 0;
    })
}

// Max POWER
export function maxPower (array) {
    return array.sort(function(a, b) {
        if(a.attack < b.attack){
            return 1;
        }
        if( a.attack > b.attack) {
            return -1;
        }
       return 0;
    });
};

// Min POWER
 export function MinPower(array) {
    return array.sort(function (a, b) {
        if(a.attack < b.attack) {
            return -1;
        }
        if( a.attack > b.attack) {
            return 1;
        }
        return 0;
    })
}