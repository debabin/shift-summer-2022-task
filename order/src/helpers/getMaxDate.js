export function getMaxDate  () {
    const today = new Date();
    let yyyy = today.getFullYear() - 18;
    let mm = today.getMonth()+1;
    let dd = today.getDate();
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    return yyyy + "-" + mm + "-" + dd
};