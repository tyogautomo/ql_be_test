const rawData = [
    {
        "username": "ali",
        "hair_color": "brown",
        "height": 1.2
    },
    {
        "username": "marc",
        "hair_color": "blue",
        "height": 1.4
    },
    {
        "username": "joe",
        "hair_color": "brown",
        "height": 1.7
    },
    {
        "username": "zehua",
        "hair_color": "black",
        "height": 1.8
    }]

/*
convert to this
{
    "h": ["username", "hair_color", "height"],
    "d": [
        ["ali", "brown", 1.2],
        ["marc", "blue", 1.4],
        ["joe", "brown", 1.7],
        ["zehua", "black", 1.8]
    ]
}
*/

//======================= CONVERTER ========================

const converter = (inputData) => {
    let convertedData = {}

    // get header (h)
    let head = Object.keys(inputData[0])

    //get datas (d)
    let datas = []
    inputData.forEach(data => {
        let person = []
        head.forEach(key => {
            person.push(data[key])
        })
        datas.push(person)
    })

    // converted
    convertedData.h = head
    convertedData.d = datas
    return convertedData
}


console.log(converter(rawData))