import {SyntheticEvent, useState} from 'react';

interface ICounterProps{
    title: string;
}

const Counter = ({title}: ICounterProps): JSX.Element => {

    const [counter, setCounter] = useState<number>(0);

    const handlePlus = (e: SyntheticEvent): void => {
        setCounter(prev => prev + 1);
    }
    // jesli nie damy return to func zwroci undefined
    // void uzywamy wtedy jesli nie chcemy nic zwracac z funkcji ! (funkcja nie moze miec returna z voidem)

    const handleMinus = (e: SyntheticEvent): void => {
        setCounter(prev => prev - 1);
    }

    return (
        <div>
            {title} 
            <div>
                {counter}
            </div>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            
        </div>
    )
}


export default Counter;


