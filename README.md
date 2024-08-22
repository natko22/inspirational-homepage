# Inspirational Homepage

Inspirational Homepage is a dynamic web application that serves as a personalized dashboard for users. It includes a to-do list, weather updates, daily quotes, and a customizable background, all designed to inspire and organize your day.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Weather Updates:** Displays real-time weather data for your location.
- **Daily Quotes:** Fetches and displays a new inspirational quote ,simply by clicking the button new quote.
- **To-Do List:** Allows users to add, remove, and mark goals as complete, with a celebratory effect.
- **Customizable Background:** Users can change the background image by searching for images from Unsplash.

## Technologies Used

- **React:** Front-end framework
- **Redux Toolkit:** State management
- **Material-UI:** UI components and styling
- **Unsplash API:** Background image search
- **OpenWeatherMap API:** Weather data
- **Quotable.io API:** Inspirational quotes
- **React Confetti:** Visual celebration effect
- **UUID:** Generating unique identifiers

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (>=14.x recommended)
- **npm** (comes with Node.js) or **Yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/natko22/inspirational-homepage.git
   cd inspirational-homepage
   ```

2. Install dependencies:

   ```bash
   npm install
   # or if you prefer Yarn
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of your project and add your API keys.

   ```makefile
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
   REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```

4. Start the development server:
   ```bash
   npm start
   # or with Yarn
   yarn start
   ```
   The application will run on `http://localhost:3000`.

## Environment Variables

- `REACT_APP_WEATHER_API_KEY`: Your API key for OpenWeatherMap.
- `REACT_APP_UNSPLASH_ACCESS_KEY`: Your API key for Unsplash.

These keys should be kept secret and not committed to version control.

## Usage

- **Weather Widget:** Displays the current weather at your location.
- **Quote Generator:** Refreshes to show a new quote with each click of the "New Quote" button.
- **To-Do List:** Add new goals by typing in the input box and pressing Enter. Mark goals as complete or delete them using the icons.
- **Change Background:** Search for new background images or cycle through existing ones.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
