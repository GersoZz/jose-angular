import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: 'estudiantes',
                loadComponent: () => import('./business/estudiantes/estudiantes.component').then(m => m.EstudiantesComponent)
            },
            {
                path: 'asignaciones',
                loadComponent: () => import('./business/asignaciones/asignaciones.component').then(m => m.AsignacionesComponent)
            },
            {
                path: 'rutas',
                loadComponent: () => import('./business/rutas/rutas.component').then(m => m.RutasComponent)
            },
            {
                path: 'por-estudiantes',
                loadComponent: () => import('./business/asig-estudiantes/asig-estudiantes.component').then(m => m.AsigEstudiantesComponent)
            },
            {
                path: 'por-rutas',
                loadComponent: () => import('./business/asigrutas/asigrutas.component').then(m => m.AsigrutasComponent)
            },
            {
                path: 'asig-activas',
                loadComponent: () => import('./business/asig-activas/asig-activas.component').then(m => m.AsigActivasComponent)
            },
            {
                path: '',
                redirectTo: 'estudiantes',
                pathMatch: 'full'
            }
        ]
        
    },
    {
        path: '**',
        redirectTo: 'estudiantes',
    }
];
