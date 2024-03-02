import axios from 'axios';
import hash from "@/helpers/hash";

// Создаем функцию для отправки запросов с обработкой ошибок
const request = async (data) => {
    try {
        // Отправляем запрос с помощью библиотеки axios
        const response = await http(data)
        // Если запрос прошел успешно, возвращаем ответ
        return Promise.resolve(response)
    } catch (error) {
        // Если возникла ошибка, проверяем статус ответа
        if (!!error.response.data && error.response.status !== 401 && error.response.status !== 400) {
            // Если статус ответа не 401 (неавторизован) и не 400 (ошибка запроса), выводим ошибку в консоль
            console.error(error.response.data)
            // И пробуем отправить запрос еще раз
            return request(data)
        }
        // Если статус ответа 401 или 400, возвращаем ошибку
        return Promise.reject(error);
    }
}

// Создаем функцию для отправки запросов с указанными параметрами
const http = (data = {}) => {
    // Устанавливаем параметры запроса
    const options = {
        headers: {
            // Устанавливаем заголовки запроса
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "X-Auth": hash(process.env.REACT_APP_PASS) // Хешируем пароль из переменной окружения
        },
        method: "POST", // Устанавливаем метод запроса
        baseURL: process.env.REACT_APP_API_URL, // Устанавливаем базовый URL для запросов
        data: data, // Устанавливаем данные для отправки
    }

    // Создаем экземпляр axios с указанными параметрами
    const instance = axios.create(options);

    // Отправляем запрос и возвращаем ответ
    return instance.request(options);
};

export default request;



