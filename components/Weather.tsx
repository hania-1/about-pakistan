"use client"; // Enables client-side rendering for this component

// Import necessary hooks and types from React
import { useState, ChangeEvent, FormEvent } from "react";

// Import custom UI components from the UI directory
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Import icons from the Lucide React library
import { CloudIcon, MapPinIcon, ThermometerIcon } from "lucide-react";

// Define a TypeScript interface for weather data
interface WeatherData {
  temperature: number;
  description: string;
  location: string;
  unit: string;
}

// Default export of the WeatherWidgetComponent function
export default function WeatherWidget() {
  // State hooks for managing location input, weather data, error messages, and loading state
  const [location, setLocation] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to handle the search form submission
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedLocation = location.trim();
    if (trimmedLocation === "") {
      setError("Please enter a valid location."); // Set error message if location input is empty
      setWeather(null); // Clear previous weather data
      return;
    }

    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous error messages

    try {
      // Fetch weather data from the weather API
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${trimmedLocation}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const weatherData: WeatherData = {
        temperature: data.current.temp_c, // Get temperature in Celsius
        description: data.current.condition.text, // Get weather description
        location: data.location.name, // Get location name
        unit: "C", // Unit for temperature
      };
      setWeather(weatherData); // Set the fetched weather data
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("City not found. Please try again."); // Set error message
      setWeather(null); // Clear previous weather data
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  // Function to get a temperature message based on the temperature value and unit
  function getTemperatureMessage(temperature: number, unit: string): string {
    if (unit === "C") {
      if (temperature < 0) {
        return `It&apos;s freezing at ${temperature}°C! Bundle up!`;
      } else if (temperature < 10) {
        return `It&apos;s quite cold at ${temperature}°C. Wear warm clothes.`;
      } else if (temperature < 20) {
        return `The temperature is ${temperature}°C. Comfortable for a light jacket.`;
      } else if (temperature < 30) {
        return `It&apos;s a pleasant ${temperature}°C. Enjoy the nice weather!`;
      } else {
        return `It&apos;s hot at ${temperature}°C. Stay hydrated!`;
      }
    } else {
      // Placeholder for other temperature units (e.g., Fahrenheit)
      return `${temperature}°${unit}`;
    }
  }
  

  // Function to get a weather message based on the weather description
  function getWeatherMessage(description: string): string {
    switch (description.toLowerCase()) {
      case "sunny":
        return "It's a beautiful sunny day!";
      case "partly cloudy":
        return "Expect some clouds and sunshine.";
      case "cloudy":
        return "It's cloudy today.";
      case "overcast":
        return "The sky is overcast.";
      case "rain":
        return "Don't forget your umbrella! It's raining.";
      case "thunderstorm":
        return "Thunderstorms are expected today.";
      case "snow":
        return "Bundle up! It's snowing.";
      case "mist":
        return "It's misty outside.";
      case "fog":
        return "Be careful, there's fog outside.";
      default:
        return description; // Default to returning the description as-is
    }
  }

  // Function to get a location message based on the current time
  function getLocationMessage(location: string): string {
    const currentHour = new Date().getHours();
    const isNight = currentHour >= 18 || currentHour < 6; // Determine if its night time

    return ` ${location} ${isNight ? "at Night" : "During the Day"}`;
  }

  // JSX return statement rendering the weather widget UI
  return (

    <div><h1 className="text-white underline font-extrabold text-center text-5xl"data-aos="flip-right">WEATHER</h1>
    <br></br>
<div style={{ backgroundColor: '#e0e0e0', width: '35vw', height: '65vh' }} className="flex justify-center items-center rounded-lg shadow-lg mx-auto my-auto">
      {/* Center the card within the screen */}
      <Card className="w-full max-w-lg mx-auto text-center bg-gray-100 rounded-xl shadow-lg"data-aos="flip-right">
        {/* Card header with title and description */}
        <CardHeader>
          <CardTitle><strong>Weather Caster</strong></CardTitle>
          <CardDescription>
  <i>&quot;Lets see the weather in your city.&quot;</i>
</CardDescription>

        </CardHeader>
  
        {/* New weather description paragraph */}
        <div className="p-6 text-gray-700"data-aos="flip-right">
          <p>
            Pakistan experiences a wide variety of climates, from hot desert areas to cold mountainous regions.
            In the north, expect cooler weather and snowy winters, especially in areas like Gilgit-Baltistan.
            In the southern parts, like Karachi, the weather tends to be warm year-round with a humid climate.
            Monsoon season brings heavy rains in the summer, particularly in the eastern regions.
          </p>
        </div>
  
        {/* Card content including the search form and weather display */}
        <CardContent className="p-6 border-t border-gray-200 rounded-b-xl"data-aos="flip-right">
          <form onSubmit={handleSearch} className="flex items-center gap-3"data-aos="flip-right">
            <Input
              type="text"
              placeholder="Enter city name"
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
              className="w-full"data-aos="flip-right"
            />
            <Button type="submit" disabled={isLoading} className="min-w-[100px]">
              {isLoading ? "Loading..." : "Search"}
            </Button>
          </form>
          
          {/* Display error message if any */}
          {error && <div className="mt-4 text-red-500">{error}</div>}
          
          {/* Display weather data if available */}
          {weather && (
            <div className="mt-4 space-y-2"data-aos="flip-right">
              <div className="flex items-center gap-2">v
                <ThermometerIcon className="w-6 h-6" />
                {getTemperatureMessage(weather.temperature, weather.unit)}
              </div>
              <div className="flex items-center gap-2"data-aos="flip-right">
                <CloudIcon className="w-6 h-6" />
                <div>{getWeatherMessage(weather.description)}</div>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-6 h-6" />
                <div>{getLocationMessage(weather.location)}</div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>
      </div>
    </div>
  );
}  