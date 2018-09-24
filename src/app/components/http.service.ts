import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    //private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    apiUrl = 'http://192.168.203.158:31651/';
    error: any;
    constructor(private http: HttpClient) { }

    postDataWithFullUrl(fullUrl: string, dishId: string) {
        return this.http.post(fullUrl, dishId);
    }

    getData(url: string) {
        return this.http.get(this.apiUrl + url);
    }

    async getDataAsync(url: string) {
        return await this.http.get(this.apiUrl + url);
    }

    postData(url: string, body: any) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(this.apiUrl + url, JSON.stringify(body), {headers: headers});
    }
}