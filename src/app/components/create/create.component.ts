import { Component, OnInit } from '@angular/core';

// SERVICE  FORM ROUTER
import { PageService } from 'src/app/page.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public pageForm: FormGroup
  constructor(
    public pageService: PageService,
    public formBuilder: FormBuilder,
    public router:Router
  ) {
    this.pageForm = this.formBuilder.group({
      name: [''],
      description: [''],
      link: ['']
    })
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.pageService.createPage(this.pageForm.value);
    this.router.navigate(['']);
  }

}
