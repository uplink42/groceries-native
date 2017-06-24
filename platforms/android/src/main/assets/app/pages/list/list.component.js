"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocialShare = require("nativescript-social-share");
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .then(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        this.isLoading = true;
        if (this.grocery.trim() === '') {
            alert('Enter a grocery item');
            return;
        }
        // dismiss kb
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .then(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = '';
            _this.isLoading = false;
        }, function () {
            alert({
                message: 'An error has ocurred while adding an item',
                okButtonText: 'OK'
            });
            _this.grocery = '';
        });
    };
    ListComponent.prototype.delete = function (item) {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.delete(item.id)
            .then(function (groceryObject) {
            _this.groceryList = _this.groceryList.filter(function (grocery) { return grocery.id !== item.id; });
            _this.isLoading = false;
            alert(item.name + ' has been removed');
        }, function () {
            alert({
                message: 'An error has ocurred while adding an item',
                okButtonText: 'OK'
            });
        });
    };
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUF5RDtBQUV6RCxzQ0FBeUU7QUFHekUsa0ZBQStFO0FBUy9FLElBQWEsYUFBYTtJQUN6Qix1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDMUQsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFMMEMsQ0FBQztJQU85RCxnQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFO2FBQzdCLElBQUksQ0FDSixVQUFBLGVBQWU7WUFDZCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtnQkFDckMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQ0QsQ0FBQTtJQUNGLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBdUJDO1FBdEJBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDUixDQUFDO1FBRUQsYUFBYTtRQUNiLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3hDLElBQUksQ0FBQyxVQUFBLGFBQWE7WUFDakIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFFO1lBQ0YsS0FBSyxDQUFDO2dCQUNMLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELFlBQVksRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxJQUFhO1FBQXBCLGlCQWdCQztRQWZBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUN0QyxJQUFJLENBQ0osVUFBQSxhQUFhO1lBQ1osS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1lBQ2hGLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFFeEMsQ0FBQyxFQUFFO1lBQ0YsS0FBSyxDQUFDO2dCQUNMLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELFlBQVksRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVzthQUMvQixHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFaLENBQVksQ0FBQzthQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsSUFBSSxFQUFFLENBQUM7UUFDVCxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUFyRStCO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVO3VEQUFDO0FBSGhELGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDL0IsQ0FBQztxQ0FHdUMseUNBQWtCO0dBRDlDLGFBQWEsQ0F3RXpCO0FBeEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnlcIjtcclxuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsaXN0XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcclxuXHRwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSkge31cclxuXHRncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcclxuXHRAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xyXG5cdGdyb2NlcnkgPSBcIlwiOyBcclxuXHRpc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRsaXN0TG9hZGVkID0gZmFsc2U7XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpXHJcblx0XHQudGhlbihcclxuXHRcdFx0bG9hZGVkR3JvY2VyaWVzID0+IHtcclxuXHRcdFx0XHRsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0YWRkKCkge1xyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09ICcnKSB7XHJcblx0XHRcdGFsZXJ0KCdFbnRlciBhIGdyb2NlcnkgaXRlbScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZGlzbWlzcyBrYlxyXG5cdFx0bGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5ncm9jZXJ5VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHR0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG5cdFx0dGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSlcclxuXHRcdC50aGVuKGdyb2NlcnlPYmplY3QgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuXHRcdFx0XHR0aGlzLmdyb2NlcnkgPSAnJztcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0YWxlcnQoe1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIGhhcyBvY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtJyxcclxuXHRcdFx0XHRcdG9rQnV0dG9uVGV4dDogJ09LJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuZ3JvY2VyeSA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRkZWxldGUoaXRlbTogR3JvY2VyeSkge1xyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuZGVsZXRlKGl0ZW0uaWQpXHJcblx0XHQudGhlbihcclxuXHRcdFx0Z3JvY2VyeU9iamVjdCA9PiB7XHJcblx0XHRcdFx0dGhpcy5ncm9jZXJ5TGlzdCA9IHRoaXMuZ3JvY2VyeUxpc3QuZmlsdGVyKChncm9jZXJ5KSA9PiBncm9jZXJ5LmlkICE9PSBpdGVtLmlkKTtcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGFsZXJ0KGl0ZW0ubmFtZSArICcgaGFzIGJlZW4gcmVtb3ZlZCcpO1xyXG5cclxuXHRcdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHRcdGFsZXJ0KHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdBbiBlcnJvciBoYXMgb2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbScsXHJcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6ICdPSydcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0c2hhcmUoKSB7XHJcbiAgXHRcdGxldCBsaXN0U3RyaW5nID0gdGhpcy5ncm9jZXJ5TGlzdFxyXG4gICAgXHQubWFwKGdyb2NlcnkgPT4gZ3JvY2VyeS5uYW1lKVxyXG4gICAgXHQuam9pbihcIiwgXCIpXHJcbiAgICBcdC50cmltKCk7XHJcbiAgXHRcdFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0U3RyaW5nKTtcclxuXHR9XHJcbn0iXX0=