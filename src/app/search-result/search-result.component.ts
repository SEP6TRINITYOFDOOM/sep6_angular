import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {

  searchText: string = '';
  isContentVisible: boolean = false;
  isContentVisible1: boolean = false;
  isContentVisible2: boolean = false;
  isContentVisible3: boolean = false;

  ContentVisibility(): void {
    this.isContentVisible = true;
    this.isContentVisible1 = false;
    this.isContentVisible2= false;
    this.isContentVisible3= false;
  }
  ContentVisibility1(): void {
    this.isContentVisible1=true;
    this.isContentVisible=false;
    this.isContentVisible2= false;
    this.isContentVisible3= false;
  }
  ContentVisibility2(): void {
    this.isContentVisible2=true;
    this.isContentVisible=false;
    this.isContentVisible1= false;
    this.isContentVisible3= false;
  }
  ContentVisibility3(): void {
    this.isContentVisible3=true;
    this.isContentVisible=false;
    this.isContentVisible1= false;
    this.isContentVisible2= false;
  }

  imageVisible : boolean=true;
  imageVisible1 : boolean=true;
  imageVisible2 : boolean=true;
  imageVisible3 : boolean=false;
  imageVisible4 : boolean=false;
  imageVisible5 : boolean=false;
  imageVisible6 : boolean=false;

  imageVisibility(): void {
    this.imageVisible =true;
    this.imageVisible1 =false;
    this.imageVisible2 =false;
    this.imageVisible3 =true;
    this.imageVisible4 =false;
    this.imageVisible5 =false;
    this.imageVisible6 =true;
  }
  imageVisibility1(): void {
    this.imageVisible =false;
    this.imageVisible1 =true;
    this.imageVisible2 =false;
    this.imageVisible3 =false;
    this.imageVisible4 =true;
    this.imageVisible5 =false;
    this.imageVisible6 =true;
  }
  imageVisibility2(): void {
    this.imageVisible =false;
    this.imageVisible1 =false;
    this.imageVisible2 =true;
    this.imageVisible3 =false;
    this.imageVisible4 =false;
    this.imageVisible5 =true;
    this.imageVisible6 =true;
  }
  imageVisibility3(): void {
    this.imageVisible =true;
    this.imageVisible1 =true;
    this.imageVisible2 =true;
    this.imageVisible3 =false;
    this.imageVisible4 =false;
    this.imageVisible5 =false;
    this.imageVisible6 =false;
  }

  ButtonVisibility() :void{
    console.log('searchText:', this.searchText);
    if (this.searchText.toLowerCase() === 'comedy') {
      this.isContentVisible = true;
      this.isContentVisible1 = false;
      this.isContentVisible2= false;
      this.isContentVisible3= false;
    } else {
      this.isContentVisible = false;
      this.isContentVisible1 = false;
      this.isContentVisible2= false;
      this.isContentVisible3= false;
    }
  }
  onSearchButtonClick() {
    this.ButtonVisibility();
  }
}
