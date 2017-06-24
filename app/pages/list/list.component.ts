import * as SocialShare from "nativescript-social-share";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextField } from "ui/text-field";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

@Component({
	selector: "list",
	templateUrl: "pages/list/list.html",
	styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
	providers: [GroceryListService]
})

export class ListComponent implements OnInit {
	constructor(private groceryListService: GroceryListService) {}
	groceryList: Array<Grocery> = [];
	@ViewChild("groceryTextField") groceryTextField: ElementRef;
	grocery = ""; 
	isLoading = false;
	listLoaded = false;

	ngOnInit() {
		this.isLoading = true;
		this.groceryListService.load()
		.then(
			loadedGroceries => {
				loadedGroceries.forEach((groceryObject) => {
					this.groceryList.unshift(groceryObject);
				});
				this.isLoading = false;
				this.listLoaded = true;
			}
		)
	}

	add() {
		this.isLoading = true;
		if (this.grocery.trim() === '') {
			alert('Enter a grocery item');
			return;
		}

		// dismiss kb
		let textField = <TextField>this.groceryTextField.nativeElement;
		textField.dismissSoftInput();
		this.groceryListService.add(this.grocery)
		.then(groceryObject => {
				this.groceryList.unshift(groceryObject);
				this.grocery = '';
				this.isLoading = false;
			}, () => {
				alert({
					message: 'An error has ocurred while adding an item',
					okButtonText: 'OK'
				});
				this.grocery = '';
			}
		)
	}

	delete(item: Grocery) {
		this.isLoading = true;
		this.groceryListService.delete(item.id)
		.then(
			groceryObject => {
				this.groceryList = this.groceryList.filter((grocery) => grocery.id !== item.id);
				this.isLoading = false;
				alert(item.name + ' has been removed');

			}, () => {
				alert({
					message: 'An error has ocurred while adding an item',
					okButtonText: 'OK'
				});
			}
		)
	}

	share() {
  		let listString = this.groceryList
    	.map(grocery => grocery.name)
    	.join(", ")
    	.trim();
  		SocialShare.shareText(listString);
	}
}