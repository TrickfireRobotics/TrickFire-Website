# TrickFire Robotics Website

Welcome to the TrickFire Robotics' website! This is a React application that uses [Sanity](https://www.sanity.io/) as a headless CMS to manage events and officer information.

## Adding Events and Officers

Follow the Sanity guide below if you are looking to add an Event or Officer using Sanity:

[Adding Events and Officers Sanity Guide](https://github.com/TrickfireRobotics/TrickFire-Website/wiki/Adding-Events-and-Officers)

## Running the App in Development Mode

To start the development server:

```bash
npm install
npm start
```

This will:

- Install all dependencies.
- Run the app in development mode at [http://localhost:3000](http://localhost:3000).

The page will reload automatically when you make changes. Lint errors will appear in the console.

### Schema Types

The Sanity studio includes the following schema types:

- **Events**: Contains event information including title, description, date, location, and links.
- **Officers**: Contains officer profiles including name, position, and portrait image.

## Project File Structure

```
TrickfireRobotics.github.io/
├── public/
│   ├── index.html
│   ├── 404.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   │   └── SanityClient.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── trickfire/
│   ├── schemaTypes/
│   │   ├── EventType.js
│   │   ├── OfficerType.js
│   │   └── index.js
│   ├── sanity.config.js
│   ├── sanity.cli.js
│   ├── package.json
│   └── ...
├── package.json
├── README.md
└── ...
```

- `public/`: Static files and the main HTML template.
  - `404.html`: Custom 404 page with SPA routing for valid routes.
- `src/`: React components and application logic.
  - `components/`: Reused components across the project. Each folder contains the JS and SCSS files.
  - `pages/`: React page components. Each folder contains the JS and SCSS files.
  - `assets/`: Asset files for each page including the Sanity client configuration.
  - `App.js`: Routes with each of the pages corresponding to url routes.
- `trickfire/`: Sanity CMS studio and schema definitions.
  - `schemaTypes/`: Schema type definitions for content (Events, Officers).
- `package.json`: Project metadata and dependencies.
- `README.md`: Project documentation.

## Deployment

### Deploying the React App

The website is deployed using GitHub pages with the gh-pages. For organizational purposes, only
deploy the website using the following command on the most recently updated Master branch
when changes are made.

To deploy:

```bash
npm run deploy
```

This will build the React app and deploy it to the `gh-pages` branch.

### Deploying Sanity Schema Changes

When you make changes to the schema types in the `trickfire/schemaTypes` folder, deploy them with:

```bash
cd trickfire
npm run deploy
```

This will deploy the updated schema to your Sanity project.

### Deployment Checklist

- [ ] Update schema types in `trickfire/schemaTypes/` if needed
- [ ] Deploy schema changes: `cd trickfire && npm run deploy`, and select "TrickFireSanity"
- [ ] Test changes locally: `npm start` and verify content appears correctly
- [ ] Build and deploy the React app: `npm run deploy`
- [ ] Verify the live site at [https://trickfirerobotics.com](https://trickfirerobotics.com)

Maintained by [Aaron Quashnock](https://github.com/Quashnock). Open an issue or pull request if you'd like to contribute.
