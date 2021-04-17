export const getTopDisease = (predictedDisease) => {
    const temp = {}
    // const values = Object.values(predictedDisease);
    // const keys = Object.keys(predictedDisease);
    const sortable = Object.entries(predictedDisease)
        .sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < 5; i++)
        temp[sortable[i][0]] = parseFloat(parseFloat(sortable[i][1]).toFixed(4) * 100).toFixed(2)
    // values.map((value, index) => 
    //     if(value >= 0.1) temp[keys[index]] = value
    // )
    // let count = 0;
    // for (let i = 0; i < values.length; i++) {
    //     if (values[i] >= 0.1) temp[keys[i]] = values[i]
    //     count += values[i]
    // }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    // console.log(count)
    return temp
}