import React from 'react'

const ShowWeather = ({setCity,handleButton,error,weatherData}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600 text-white px-4">
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">Weather App</h1>

        <input 
            type="text" 
            placeholder="Enter city" 
            onChange={(e) => setCity(e.target.value)} 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button 
            onClick={handleButton}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
            Get Weather
        </button>

        {error && <p className="text-center text-red-500">{error}</p>}

        {weatherData && (
            <div className="text-center space-y-2">
                <p className="text-xl font-semibold">{weatherData.name}</p>
                <p className="text-lg">Temperature: {weatherData.main.temp} °C</p>
                <p className="text-md text-gray-700">Forecast: {weatherData.weather[0].description}</p>
            </div>
        )}
    </div>
</div>
  )
}

export default ShowWeather