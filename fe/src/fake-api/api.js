import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const flightRoutes = require("./flightRoutes.json");
const airportNames = require("./airportNames.json");

const worker = setupWorker(
  http.get(
    "https://localhost:3000/airportnames",
    ({ request, params, cookies }) => {
      return HttpResponse.json(
        {
          airportNames,
        },
        {
          status: 202,
          statusText: "Mocked status",
        }
      );
    }
  ),
  http.get(
    "https://localhost:3000/flightroutes",
    ({ request, params, cookies }) => {
      return HttpResponse.json(
        {
          flightRoutes,
        },
        {
          status: 202,
          statusText: "Mocked status",
        }
      );
    }
  )
);

worker.start();
