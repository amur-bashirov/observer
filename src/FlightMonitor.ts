import { FlightDeltaReporter } from "./FlightDeltaReporter.ts";
import { FlightFeed } from "./FlightFeed.ts";
import { FlightStatusReporter } from "./FlightStatusReporter.ts";

main();

function main() {
  let feed = new FlightFeed();
  feed.register(new FlightDeltaReporter());
  feed.register(new FlightStatusReporter());
  feed.start();
}
