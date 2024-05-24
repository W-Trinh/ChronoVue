# Chronovue

Chronovue is a web application utilizing semantic web technologies to navigate through European historical events. It allows users to observe the historical evolution of a country over historical periods.

## Description

This application allows you to:
- Select a starting event randomly in the home page.
- Display a detailed page of the event with links to three past events and three future events.
- The linked events are selected based on an algorithm that finds the closest events in time within the same country as the current event.
- Return to the home page at any time.

## Key Features

- **Random Selection**: Choose a starting event within 4 randomly chosen events that can be rolled if wanted.
- **Temporal Navigation**: Access the closest past and future historical events.
- **Event Details**: View detailed information about historical events.

## Technologies Used

- **Frontend**: React with Redux for storing DBpedia and Wikidata identifiers.
- **Backend**: Sparql queries to retrieve historical data.

## Installation and Launch

To install and run the application locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.

### Installation

1. Clone the application repository:
   ```bash
   git clone https://github.com/W-Trinh/ChronoVue.git

2. Navigate to the application directory:
    ```bash
   cd ChronoVue
   
3. Install the dependencies:
    ```bash
   npm install

### Launch

1. Start the application:
   ```bash
    npm start

2. Open your browser and go to http://localhost:3000 to see the application in action.

### Authors

Developed by Williams TRINH and Peïo GIL.