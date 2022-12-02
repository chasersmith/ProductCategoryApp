## Run Locally With Docker

First, clone git repository:

  ```git clone https://github.com/chasersmith/ProductCategoryApp.git```

Next, in the root directory where *docker-compose.yml* is located, run the following command
```docker-compose up```

Wait for Docker to finish building/starting container images and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  ## Run Locally Without Docker
First, clone git repository:

  ```git clone https://github.com/chasersmith/ProductCategoryApp.git```

Next, start the backend API
```
cd backend/KredoChallengeAppAPI/KredoChallengeAppAPI
dotnet run
```
Then, navigate back to root folder and start up front end UI app
```
cd frontend\kredo-challenge-app
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.