import axios from 'axios';

export const url = 'https://zont-online.ru/api/button_count';


export const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-ZONT-Client': 'kirillantropov.ru@ya.ru',
    },
});
