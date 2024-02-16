import {createRouter,createWebHashHistory} from 'vue-router'

import EstudianteActualizar from '../pages/EstudianteActualizar.vue'
import EstudianteConsultar from '../pages/EstudianteConsultar.vue'
import EstudianteEliminar from '../pages/EstudianteEliminar.vue'
import EstudianteGuardar from '../pages/EstudianteGuardar.vue'

const routes = [
    {
        path : '/actualizar',
        component: EstudianteActualizar
    },
    {
        path : '/consultar',
        component: EstudianteConsultar
    },
    {
        path : '/eliminar',
        component: EstudianteEliminar
    },
    {
        path : '/guardar',
        component: EstudianteGuardar
    }
]

const router = createRouter({history: createWebHashHistory(),routes})

export default router;