import { Flight } from "./entity/Flight";
import { Observer } from "./Observer";

export class FlightStatusReporter implements Observer {
   
  public update(flight: Flight | null, oldflight: null): void {
    if (flight != null){
        console.log(`The flight's transporter id is ${flight.icao24},
           call sign: ${flight.callsign},
           country of origin: ${flight.origin_country},
           longitude: ${flight.longitude}, 
           latitude: ${flight.latitude},
           velocity: ${flight.velocity}
           altitude: ${flight.geo_altitude} `)
    } else{
      console.log('No flight passed in')
    }
  }
}