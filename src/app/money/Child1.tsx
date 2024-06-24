type Child1Props = {
    onIncrement: () => void;
};

const Child1 = ({ onIncrement }: Child1Props) => {
    return (
        <div className="flex flex-col items-center p-4 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Child1 Component</h2>
            <button
                onClick={onIncrement}
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
                Increment by 1000
            </button>
        </div>
    );
};

export default Child1;
