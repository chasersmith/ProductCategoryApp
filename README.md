## Run Locally With Docker

First, clone git repository:

  ```git clone https://github.com/chasersmith/ProductCategoryApp.git```

Next, with [Docker](https://www.docker.com/products/docker-desktop/) installed, locate to the root directory where *docker-compose.yml* is located and run the following command

```docker-compose up```

Wait for Docker to finish building/starting container images and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  ## Run Locally Without Docker
First, clone git repository:

  ```git clone https://github.com/chasersmith/ProductCategoryApp.git```

Next, start the backend API using the dotnet CLI
```
cd backend/KredoChallengeAppAPI/KredoChallengeAppAPI
dotnet run
```
Then, navigate to frontend folder, install dependencies, and start up front end UI app server using NPM
```
cd frontend\kredo-challenge-app
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.