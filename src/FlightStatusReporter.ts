import { Flight } from "./entity/Flight.ts";
import { Observer } from "./Observer.ts";

export class FlightStatusReporter implements Observer {
   
  public update(flight: Flight | null, oldflight: null): void {
    if (flight != null){
        console.log(`The flight's transporter id is ${flight.icao24},
           call sign: ${flight.callsign},
           country of origin: ${flight.origin_country},
           time position: ${flight.time_position},
           last contact: ${flight.last_contact},
           longitude: ${flight.longitude}, 
           baro_altitude: ${flight.baro_altitude},
           on_ground: ${flight.on_ground},
           true_track: ${flight.true_track},
           vertical rate: ${flight.vertical_rate},
           sensors: ${flight.sensors},
           squawk: ${flight.squawk},
           spi: ${flight.spi},
           position source: ${flight.position_source},
           latitude: ${flight.latitude},
           velocity: ${flight.velocity}
           altitude: ${flight.geo_altitude} `)
    } else{
      console.log('No flight passed in')
    }
  }
}