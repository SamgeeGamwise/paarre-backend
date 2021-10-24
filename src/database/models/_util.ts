import to from "await-to-js"

const getData = async (dbData: Promise<any | null>): Promise<any> => {
    const [err, data] = await to(dbData)
    console.log(err)
    console.log(data)

    if (err) {
        throw err
    } else if (!data) {
        throw new Error("No results")
    } else {
        return data
    }
}

export {
    getData,
}
