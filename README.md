# PlacePicker App

Welcome to the "PlacePicker" ReactJS application! This project allows you to discover and manage a list of intriguing places around the globe. The app is designed to let you explore various destinations, add them to your wishlist, and efficiently remove them using a modal with a progress bar.

## Getting Started

Follow these steps to run the app on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/lionsgrandson/placePicker.git
cd placePicker
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) to start using the app.

## Features

### 1. Location Detection

The app automatically determines your location for personalized sorting of places by distance.

### 2. Sorting by Distance

All places are sorted by distance from your current location, providing a personalized list of destinations to explore.

### 3. Wishlist Management

- **Add to Wishlist:** Click on a destination to add it to your list of places you want to visit.
- **Remove from Wishlist:** Click on a destination in your wishlist to trigger a modal. You have 3 seconds to decide whether to keep or delete the selected place.

### 4. Modal Confirmation with Progress Bar

- When removing a place from your wishlist, a modal will appear.
- A progress bar indicates the time remaining (3 seconds) to make a decision.
- Clicking "No" will keep the place in your wishlist.
- Clicking "Yes" or allowing the progress bar to complete will delete the place.

## Technologies Used

- ReactJS
- JavaScript (ES6+)
- HTML5
- CSS3

Enjoy exploring the world with "PlacePicker"! 🌍🗺️
