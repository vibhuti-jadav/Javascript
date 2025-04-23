export const filt =(data ,key ,value) => {
    let newData = data.filter((ele) => ele[key] == value);

    return newData
}