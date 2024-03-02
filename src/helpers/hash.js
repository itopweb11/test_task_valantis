import md5 from "md5";

const hash = (password) => {
    // Получаем текущую дату в формате ГГГГММДД
    const date = getDate();

    // Сгенерируем пароль с использованием даты и password
    return md5(`${password}_${date}`);
};

// Функция для получения текущей даты в формате ГГГГММДД
const getDate = () => {
    const today = new Date();
    const dd = String(today.getUTCDate()).padStart(2, "0");
    const mm = String(today.getUTCMonth() + 1).padStart(2, "0");
    const yyyy = today.getUTCFullYear();

    return yyyy + mm + dd;
};

export default hash;

