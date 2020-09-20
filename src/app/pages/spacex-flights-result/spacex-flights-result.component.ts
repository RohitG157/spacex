import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightSearchResultService } from '../../services/flight-search-result.service';

@Component({
    selector: 'app-spacex-flights-result',
    templateUrl: './spacex-flights-result.component.html',
    styleUrls: ['./spacex-flights-result.component.scss']
})
export class SpacexFlightsResultComponent implements OnInit {
    launchList: any[] = [];
    isLoading: boolean;
    isResponse: boolean;
    constructor(public flightService: FlightSearchResultService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(queryParams => {
            this.filterLaunches(queryParams);
        });
    }

    filterLaunches(queryParams) {
        this.isLoading = true;
        this.isResponse = false;
        this.flightService.getLaunchData(queryParams).subscribe
            ((flights) => {
                if (flights.length > 0) {
                    this.isResponse = false;
                    this.launchList = flights;
                } else {
                    this.isResponse = true;
                    this.launchList = [];
                }
                this.isLoading = false;
            })
    }

    ngOnInit(): void {
        let queryParams = {};
        this.flightService.getLaunchData(queryParams).subscribe
            ((flights) => {
                this.launchList = flights;
            })
    }

    trackByFn(index, item) {
        return item.id;
    }
}
