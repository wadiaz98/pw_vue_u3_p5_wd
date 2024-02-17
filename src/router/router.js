import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/actualizar',
        component: () => import('../pages/EstudianteActualizar.vue')
    },
    {
        path: '/consultar/:id',
        component: () => import('../pages/EstudianteConsultar.vue')
    },
    {
        path: '/eliminar',
        component: () => import('../pages/EstudianteEliminar.vue')
    },
    {
        path: '/guardar',
        component: () => import('../pages/EstudianteGuardar.vue')
    }
    ,
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NotFoundPage.vue')
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router;