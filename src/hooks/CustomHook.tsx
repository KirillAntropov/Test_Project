import { useState } from 'react';

import axios from 'axios';

import { instance } from '../api/instance';

interface Responce {
    count: number
}

interface Data {
    data: number
    error: string
    isLoading: boolean
}

export const CustomHook = (url: string, count: number) => {
    const [value, setValue] = useState<Data>({
        data: 0,
        error: '',
        isLoading: false,
    });
    const [timer, setTimer] = useState<boolean>(false);

    const Data = async () => {
        try {
            if (!timer) {
                setValue({ ...value, isLoading: true });

                const response = await instance.post<Responce>(url, { count: count + 1 });

                const data = await response.data;

                if (data) {
                    setValue({
                        data: data.count,
                        error: '',
                        isLoading: false,
                    });
                }
                setTimer(true);

                setTimeout(() => {
                    setTimer(false);
                }, 1000);
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log(`error ${error}`);
            } else {
                console.log('error ', error);
            }
            setValue({
                data: 0,
                error: error.message,
                isLoading: false,
            });
        }
    };
  
  return { ...value, Data };
  
};
