import { FlightFeed } from "./FlightFeed.ts";

main();

function main() {
  let feed = new FlightFeed();
  feed.start();
}
