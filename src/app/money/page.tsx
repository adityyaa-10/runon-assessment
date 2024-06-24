"use client";
import { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [money, setMoney] = useState<number>(0);

    const incrementMoney = () => setMoney(money + 1000);
    const decrementMoney = () => setMoney(money - 500);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-4">Parent Component</h1>
            <p className="text-xl mb-6">Money: {money}</p>
            <div className="flex space-x-4">
                <Child1 onIncrement={incrementMoney} />
                <Child2 onDecrement={decrementMoney} />
            </div>
        </div>
    );
};

export default Parent;
