import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crud-category',
  templateUrl: './crud-category.component.html',
  styleUrls: ['./crud-category.component.scss']
})
export class CrudCategoryComponent implements OnInit {

  categoryForm!: FormGroup;
  formArray: any = [];
  subcategoryForm: any;
  exiting: any;
  public pageTitle: string = 'Create Category';
  public buttonname: string = 'Create';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public categorySvc: CategoryService,
    public location: Location
  ) { }

  ngOnInit(): void {
    if (this.router.url.indexOf('/create-category') !== -1) {
      this.categoryForm = this.fb.group({
        category: ['', Validators.required],
        subcategory: this.fb.array([this.sub()])
      });
    } else if (this.router.url.indexOf('/edit-category') !== -1) {
      this.categoryForm = this.fb.group({
        category: ['', Validators.required],
        subcategory: this.fb.array([], Validators.required)
      });
    }
    this.subcategoryForm = this.categoryForm.controls['subcategory'] as FormArray;
    const id = this.route.snapshot.params['id'];
    if (this.router.url.indexOf('/edit-category') !== -1 && id !== undefined) {
      this.pageTitle = 'Edit Category';
      this.buttonname = 'Update';

      this.categorySvc.findCategory(id).subscribe((dist) => {
        this.categoryForm.patchValue({
          category: dist.data.category,
          subcategory: dist.data.subcategories.map((result: any) => {
            this.subcategory.push(this.fb.group({
              subcategory: result
            }))
          })
        });
      })
    }
  }

  get myForm() {
    return this.categoryForm.controls;
  }

  get subcategory() {
    return this.categoryForm.controls['subcategory'] as FormArray;
  }

  sub(): FormGroup {
    return this.fb.group({
      subcategory: ['', Validators.required],
    });
  }

  addSubcategory() {
    let arr = this.fb.group({
      subcategory: ['', Validators.required]
    });
    this.subcategoryForm.push(arr);
  }

  subcon(index: any) {
    this.subcategoryForm = this.categoryForm.controls['subcategory'] as FormArray;
    const formGroup = this.subcategoryForm.controls[index] as FormGroup;
    return formGroup;
  }

  deleteSubcategory(eduIndex: number) {
    this.subcategory.removeAt(eduIndex);
  }

  createUpdateCategory() {
    if (this.buttonname === 'Create') {

      const formData = new FormData();
      formData.append('category', this.categoryForm.controls['category'].value);
      this.categoryForm.value.subcategory.map((e: any) => formData.append('subcategories', e.subcategory))

      this.categorySvc.createCategory(formData).subscribe((dist) => {
        this.location.back();
      });
    } else if (this.buttonname === 'Update') {
      const id = this.route.snapshot.params['id'];
      const formData = new FormData();
      formData.append('category', this.categoryForm.controls['category'].value);
      this.categoryForm.value.subcategory.map((e: any) => formData.append('subcategories', e.subcategory))

      this.categorySvc.updateCategory(formData, id).subscribe((dist) => {
        this.location.back();
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    this.formArray = this.subcategoryForm;
    const from = event.previousIndex;
    const to = event.currentIndex;
    this.moveItemInFormArray(this.formArray, from, to);
    //moveItemInArray(this.formArray, event.previousIndex, event.currentIndex); 
  }

  moveItemInFormArray(formArray: FormArray, fromIndex: number, toIndex: number): void {
    const from = this.clamp(fromIndex, formArray.length - 1);
    const to = this.clamp(toIndex, formArray.length - 1);

    if (from === to) {
      return;
    }

    const previous = formArray.at(from);
    const current = formArray.at(to);
    formArray.setControl(to, previous);
    formArray.setControl(from, current);
  }

  /** Clamps a number between zero and a maximum. */
  clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }

}
