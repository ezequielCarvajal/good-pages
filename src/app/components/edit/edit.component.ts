import { Component, OnInit } from '@angular/core';

// SERVICE  FORM ROUTER
import { PageService } from 'src/app/page.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm:FormGroup
  pageRef:any
  constructor(
    public pageService: PageService ,
    public formBuilder:FormBuilder ,
    public activeRoute:ActivatedRoute ,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      description: [''],
      link: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.pageService.getPageById(id).subscribe( res => {
      this.pageRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.pageRef.name],
        description: [this.pageRef.description],
        link: [this.pageRef.link]
      })
    })
  }
  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.pageService.updatePage(this.editForm.value, id);
    this.router.navigate([''])
  }

}
