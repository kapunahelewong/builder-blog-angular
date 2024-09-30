import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Content,
  fetchOneEntry,
  type BuilderContent,
} from '@builder.io/sdk-angular';

@Component({
  selector: 'app-blog-article',
  standalone: true,
  imports: [Content, CommonModule],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.css'
})
export class BlogArticleComponent {
  article: BuilderContent | null = null;
  model = 'blog-article';

  async ngOnInit() {
    this.article = await fetchOneEntry({
      model: this.model,
      apiKey: "5c03dd31938043d785cf8099a2b5646b",
      query: {
        'data.handle': 'article1',
      },
    });
  }
}
