import { useState } from 'react';

export default function ReactTestComponent() {
  const [count, setCount] = useState(0);
  const [isWorking, setIsWorking] = useState(true);

  const handleClick = () => {
    setCount(count + 1);
    setIsWorking(!isWorking);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            React Test Component
          </h1>
          
          <div className="my-8">
            {isWorking ? (
              <div className="text-6xl animate-bounce">✅</div>
            ) : (
              <div className="text-6xl animate-spin">⚛️</div>
            )}
          </div>

          <p className="text-xl text-gray-600 mb-6">
            {isWorking ? 'React is working!' : 'React is still working!'}
          </p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Button clicked:</p>
            <p className="text-5xl font-bold text-indigo-600">{count}</p>
            <p className="text-sm text-gray-500 mt-2">times</p>
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Click to Test Reactivity
          </button>

          <div className="mt-6 text-sm text-gray-500">
            <p>✓ useState hook working</p>
            <p>✓ Event handlers working</p>
            <p>✓ Component rendering working</p>
          </div>
        </div>
      </div>
    </div>
  );
}