import md5 from "md5";

const hash = (password) =>{
    const date = getDate()
    return md5(`${password}_${date}`)
}

const getDate = () =>{
    const today = new Date();
    const dd = String(today.getUTCDate()).padStart(2, '0');
    const mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getUTCFullYear();

    return yyyy+mm+dd
}

export default hash
