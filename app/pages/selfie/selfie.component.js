"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SelfieComponent = (function () {
    function SelfieComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    SelfieComponent.prototype.ngOnInit = function () {
        var _this = this;
        var camera = require("nativescript-camera");
        var isAvailable = camera.isAvailable();
        if (!isAvailable) {
            alert('No camera!');
            return;
        }
        camera.requestPermissions();
        var imageModule = require("ui/image");
        var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
        camera.takePicture(options)
            .then(function (imageAsset) {
            console.log("Result is an image asset instance");
            var image = new imageModule.Image();
            image.src = imageAsset;
            alert("Selfie saved in Photos/Gallery");
            _this.goBack();
        })
            .catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    SelfieComponent.prototype.goBack = function () {
        this.routerExtensions.navigate([""], {
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
    };
    return SelfieComponent;
}());
SelfieComponent = __decorate([
    core_1.Component({
        selector: "my-selfie",
        templateUrl: './pages/selfie/selfie.component.html',
        styleUrls: ["pages/selfie/selfie.component.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], SelfieComponent);
exports.SelfieComponent = SelfieComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZmllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGZpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxzQ0FBeUU7QUFDekUsc0RBQStEO0FBUS9ELElBQWEsZUFBZTtJQUMzQix5QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTFELGtDQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUF0QkEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDOUMsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUVELE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxJQUFNLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUV6RixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQyxVQUFVO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxHQUFHO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzlCLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHNDQUFzQztRQUNuRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNoRCxDQUFDO3FDQUdxQyx5QkFBZ0I7R0FEMUMsZUFBZSxDQXFDM0I7QUFyQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcbmltcG9ydCB7IHNldEhpbnRDb2xvciB9IGZyb20gXCIuLi8uLi91dGlscy9oaW50LXV0aWxcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibXktc2VsZmllXCIsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3NlbGZpZS9zZWxmaWUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvc2VsZmllL3NlbGZpZS5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGZpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnN0IGNhbWVyYSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIpO1xyXG5cdFx0Y29uc3QgaXNBdmFpbGFibGUgPSBjYW1lcmEuaXNBdmFpbGFibGUoKTsgXHJcblx0XHRpZiAoIWlzQXZhaWxhYmxlKSB7XHJcblx0XHRcdGFsZXJ0KCdObyBjYW1lcmEhJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xyXG5cdFx0Y29uc3QgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidWkvaW1hZ2VcIik7XHJcblx0XHRjb25zdCBvcHRpb25zID0geyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZSB9O1xyXG5cclxuXHRcdGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKSAgIFxyXG5cdCAgICAudGhlbigoaW1hZ2VBc3NldCkgPT4ge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgaXMgYW4gaW1hZ2UgYXNzZXQgaW5zdGFuY2VcIik7XHJcblx0ICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgaW1hZ2VNb2R1bGUuSW1hZ2UoKTtcclxuXHQgICAgICAgIGltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XHJcblx0ICAgICAgICBhbGVydChcIlNlbGZpZSBzYXZlZCBpbiBQaG90b3MvR2FsbGVyeVwiKTsgXHJcblx0ICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG5cdCAgICB9KVxyXG5cdCAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z29CYWNrKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIlwiXSwge1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjoge1xyXG5cdCAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiLFxyXG5cdCAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG5cdCAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cdH1cclxufSJdfQ==