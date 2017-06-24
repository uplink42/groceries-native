import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "my-selfie",
	templateUrl: './pages/selfie/selfie.component.html',
	styleUrls: ["pages/selfie/selfie.component.css"],
})

export class SelfieComponent implements OnInit {
	constructor(private routerExtensions: RouterExtensions) {}

	ngOnInit() {
		const camera = require("nativescript-camera");
		const isAvailable = camera.isAvailable(); 
		if (!isAvailable) {
			alert('No camera!');
			return;
		}
		
		camera.requestPermissions();
		const imageModule = require("ui/image");
		const options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };

		camera.takePicture(options)   
	    .then((imageAsset) => {
	        console.log("Result is an image asset instance");
	        var image = new imageModule.Image();
	        image.src = imageAsset;
	        alert("Selfie saved in Photos/Gallery"); 
	        this.goBack();
	    })
	    .catch(function (err) {
	        console.log("Error -> " + err.message);
		});
	}

	goBack() {
		this.routerExtensions.navigate([""], {
	        transition: {
	            name: "flip",
	            duration: 2000,
	            curve: "linear"
	        }
	    });
	}
}