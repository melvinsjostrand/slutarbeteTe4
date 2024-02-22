import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './blog/blog.component';
import { CommentViewerComponent } from './comment-viewer/comment-viewer.component';

const routeConfig: Routes = [
    {
      path: '',
      component: IndexComponent,
      title: 'Startsida'
    },
    {
      path: 'index',
      component: IndexComponent,
      title: 'Startsida'
    },
    {
        path: 'product',
        component: CommentViewerComponent,
        title: 'product'
    },
    {
      path: 'blog',
      component: BlogComponent,
      title: 'blog'
  }
  ];
  
  export default routeConfig;