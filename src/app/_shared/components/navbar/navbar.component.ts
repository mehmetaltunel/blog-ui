import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/common/category';
import { CategoryService } from '../../services/common/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _categoryService: CategoryService) { }
  categories: Category[] = [];
  ngOnInit(): void {
    //this.getCategory();
  }

  getCategory() {
    this._categoryService.getNestedCategories().then(x => {
      this.categories = x as Category[];
      console.log(this.categories);
    })
  }

}
