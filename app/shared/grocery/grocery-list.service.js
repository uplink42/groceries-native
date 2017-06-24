"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var loading_1 = require("./../loading");
var GroceryListService = (function () {
    function GroceryListService(http, loading) {
        this.http = http;
        this.loading = loading;
    }
    GroceryListService.prototype.doRequest = function (request) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        switch (request.method) {
            case 'get':
                return this.http.get(config_1.Config.apiUrl + request.path, { headers: headers })
                    .toPromise()
                    .then(function (response) {
                    var groceryList = [];
                    response.json().Result.forEach(function (grocery) {
                        groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
                    });
                    console.dir(response.json());
                    return groceryList;
                })
                    .catch(this.handleErrors);
            case 'post':
                headers.append("Content-Type", "application/json");
                return this.http.post(config_1.Config.apiUrl + request.path, JSON.stringify({ Name: request.params.Name }), { headers: headers })
                    .toPromise()
                    .then(function (response) {
                    console.dir(response.json());
                    return new grocery_1.Grocery(response.json().Result.Id, request.params.Name);
                })
                    .catch(this.handleErrors);
            case 'delete':
                headers.append("Content-Type", "application/json");
                return this.http.delete(config_1.Config.apiUrl + request.path + "/" + request.params.Id, { headers: headers })
                    .toPromise()
                    .then(function (response) {
                    console.dir(response.json());
                    return response.json();
                })
                    .catch(this.handleErrors);
        }
    };
    GroceryListService.prototype.load = function () {
        var request = {
            method: 'get',
            path: 'Groceries'
        };
        return this.doRequest(request);
    };
    GroceryListService.prototype.add = function (name) {
        var request = {
            method: 'post',
            path: 'Groceries',
            params: { Name: name },
        };
        console.dir(request);
        return this.doRequest(request);
    };
    GroceryListService.prototype.delete = function (id) {
        var request = {
            method: 'delete',
            path: 'Groceries',
            params: { Id: id },
        };
        return this.doRequest(request);
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, loading_1.LoadingService])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLHVDQUFxQztBQUVyQyxvQ0FBbUM7QUFDbkMscUNBQW9DO0FBRXBDLHdDQUE4QztBQUk5QyxJQUFhLGtCQUFrQjtJQUMzQiw0QkFBb0IsSUFBVSxFQUFVLE9BQXVCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUFHLENBQUM7SUFFbkUsc0NBQVMsR0FBVCxVQUFXLE9BQWlCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLEtBQUs7Z0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztxQkFDdkUsU0FBUyxFQUFFO3FCQUNYLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ1YsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNyQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87d0JBQ25DLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVELENBQUMsQ0FBQyxDQUFDO29C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LENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDO0FBOUVZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUVpQixXQUFJLEVBQW1CLHdCQUFjO0dBRHRELGtCQUFrQixDQThFOUI7QUE5RVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuL2dyb2NlcnlcIjtcclxuXHJcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vbG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBJUmVxdWVzdCB9IGZyb20gXCIuLy4uL0lSZXF1ZXN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGxvYWRpbmc6IExvYWRpbmdTZXJ2aWNlKSB7fVxyXG5cclxuICAgIGRvUmVxdWVzdCAocmVxdWVzdDogSVJlcXVlc3QpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlICdnZXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIHJlcXVlc3QucGF0aCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkuUmVzdWx0LmZvckVhY2goKGdyb2NlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeShncm9jZXJ5LklkLCBncm9jZXJ5Lk5hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncG9zdCc6XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwgKyByZXF1ZXN0LnBhdGgsIEpTT04uc3RyaW5naWZ5KHsgTmFtZTogcmVxdWVzdC5wYXJhbXMuTmFtZSB9KSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pICAgIFxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyb2NlcnkocmVzcG9uc2UuanNvbigpLlJlc3VsdC5JZCwgcmVxdWVzdC5wYXJhbXMuTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoQ29uZmlnLmFwaVVybCArIHJlcXVlc3QucGF0aCArIFwiL1wiICsgcmVxdWVzdC5wYXJhbXMuSWQsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIDogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgcGF0aDogJ0dyb2NlcmllcydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdChyZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQobmFtZTogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBwYXRoOiAnR3JvY2VyaWVzJyxcclxuICAgICAgICAgICAgcGFyYW1zOiB7IE5hbWU6IG5hbWUgfSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5kaXIocmVxdWVzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9SZXF1ZXN0KHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShpZDogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIHBhdGg6ICdHcm9jZXJpZXMnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHsgSWQ6IGlkIH0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kb1JlcXVlc3QocmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufSJdfQ==