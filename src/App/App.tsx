import React, { useState, useCallback } from 'react';
import './App.css';
import { ButtonClick } from '../components/Button/Button';
import { Counter } from '../components/Counter/Counter';
import { CustomHook } from '../hooks/CustomHook';
import { ServerResponces } from '../components/ServerResponce/ServerResponce';
import { url } from '../api/instance';

function App() {
    const [count, setCount] = useState<number>(0);

    const { data: responce, isLoading, error, Data } = CustomHook (url, count);

    const counter = useCallback (() => {
        setCount((count) => count + 1);
        Data();
    }, [Data]);

    return (
        <div className="App">
            <div className="container">
                <ButtonClick
                    onClick={counter}
                    loading={isLoading}
                />
                <Counter
                    count={count}
                />
                <ServerResponces
                    responce={responce}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;
