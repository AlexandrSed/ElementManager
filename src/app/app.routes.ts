import { Routes } from '@angular/router';
import { ElementEditorComponent } from './element-editor/element-editor.component';
import { ElementViewerComponent } from './element-viewer/element-viewer.component';

export const routes: Routes = [{
    path: '',
    component: ElementEditorComponent,
    title: 'Editor page',
  },
  {
    path: 'view',
    component: ElementViewerComponent,
    title: 'Viewer details',
  },
];
