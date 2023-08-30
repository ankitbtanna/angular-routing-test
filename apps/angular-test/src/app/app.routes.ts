import { Route } from '@angular/router';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { SecondParentChild1Component } from './second-parent-child-1/second-parent-child-1.component';
import { SecondParentChild2Component } from './second-parent-child-2/second-parent-child-2.component';

export const appRoutes: Route[] = [
   {
        path: '',
        component: SecondParentComponent,
        children: [
            {
                path: 'child-1',
                component: SecondParentChild1Component
            },
            {
                path: 'child-2',
                component: SecondParentChild2Component
            }
        ]
   }
];
