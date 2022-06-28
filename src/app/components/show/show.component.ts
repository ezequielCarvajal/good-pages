import { Component, OnInit } from '@angular/core';


//MODEL
import { Page } from 'src/app/page.model';

//SERVICE
import { PageService } from 'src/app/page.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Pages: Page[];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.getPage().subscribe((res)=> {
      this.Pages = res.map( (e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Page)
        }
      })
    })
  }
  deleteRow = (page) => {
    this.pageService.deletePage(page)
  }
}

