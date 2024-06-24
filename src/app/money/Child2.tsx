type Child2Props = {
    onDecrement: () => void;
};

const Child2 = ({ onDecrement }: Child2Props) => {
    return (
        <div className="flex flex-col items-center p-4 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Child2 Component</h2>
            <button
                onClick={onDecrement}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
                Decrement by 500
            </button>
        </div>
    );
};

export default Child2;
