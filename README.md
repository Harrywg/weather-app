[View Hosted Site](https://hwg-weather-app.netlify.app/)
# Weather App
## Technologies

1. JavaScript
2. React
3. CSS

## Overview
After experiencing some complex and difficult to read weather apps, I thought of creating a stylised weather app that displays data in a readable and aesthetic way. The inclusion of a styled dynamic map is intended to give added context to the overall visual experience, giving the user more detail than just a text based description which is important when displaying this data on an international scale.

While a weather app is a common practice app to build, I tried to show maturity in my skills with some advanced CSS (grid, mix-blend-mode) and inclusion of the Google Maps API based map which is styled to fit the theme.

## My Process
### Implementing Design
The design of this app was something I valued highly in order to try and stand out from other weather apps. The app is fully responsive with a grid based layout, and utilises the 'mix-blend-mode: luminosity' CSS property to pull the background colour into the pages content. As the background is a two-tone gradient, this creates a nice effect especially on the map and solves alot of problem with map styling that otherwise is very limited to JSON styling through the API itself. 

### Managing State
As this app is communicating with three API's good state management is important to ensure a consistent user experience. The Async Paginate search bar is sending a request to the GeoDB Cities API, which is filtered by population to return the most relevant results. Once a result is selected, the app sends requests to the Google Maps API, and the Open Weather API based on the latitude and longitude properties of the first request. The results are then displayed dynamically through several components styled in a grid based layout.

