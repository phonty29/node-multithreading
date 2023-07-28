const isPositiveInteger = (str) => {
    const num = +str;
    return num>0 && Number.isInteger(num);
}

const getDynamicRoute = (params) => {
    return params.split('/').map(p => isPositiveInteger(p) ? ':n' : p).join('/');
}

module.exports = { getDynamicRoute };