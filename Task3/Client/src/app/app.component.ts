import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Component({
    selector: 'my-app',
    template: `
    <h1>PingPong</h1>
    <button (click)="onPingClick()">Ping</button>
    <br/>
    <pre>Responses: {{response}}</pre>
    <br/>`,
})
export class AppComponent {
    response: string = ""

    constructor(private http: Http) { }

    onPingClick() {
        const get1 = this.http.get(`http://localhost:8888/get1`).toPromise()
        const get2 = this.http.get(`http://localhost:8888/get2`).toPromise()

        Promise.all([get1, get2]).then((responses) => {
            responses.forEach(response => {
                this.handleResponse(response)
            })
            this.http.get(`http://localhost:8888/get3`).toPromise().then(response => {
                this.handleResponse(response)
            }).catch((err) => {
                this.handleResponse(err)
            })
        }).catch((err) => {
            this.handleResponse(err)
        })
    }

    handleResponse(response: Response) {
        let success = response.status == 200
        this.response += "\nurl: " + response.url + (success ? " succeeded with: " : " failed with: ") + response.text()
    }
}
