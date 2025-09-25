import { Flight } from "./entity/Flight.ts";
import { Observer } from "./Observer.ts";

export class FlightDeltaReporter implements Observer {
   
  public update(flight: Flight | null, oldflight: Flight | null): void {
    if (flight != null && oldflight != null){
        console.log(`Changes in the flight:
           longitude changed from ${oldflight.longitude} to ${flight.longitude}, 
           latitude changed from ${oldflight.latitude} to ${flight.latitude},
           velocity changed from ${oldflight.velocity} to ${flight.velocity},
           altitude changed from ${oldflight.geo_altitude} to ${flight.geo_altitude} `)
    }  else if(flight == null){
      console.log('No flight passed in')
    } else{
        console.log('No old flight passed')
    }

  }
}