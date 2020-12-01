import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imageFile: any;
  constructor() { }

  ngOnInit(): void {
  }

  public onChangeImage(event) {
    const files = event.srcElement.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    }
    this.upload(event)
  }

  public upload(event): void {
    const file = event.target.files[0];
    this.imageFile = file;
    this.uploadDocumentToStorage();
  }

  uploadDocumentToStorage() {
    // let serviceGlobal = this.registerService;

  };

}
