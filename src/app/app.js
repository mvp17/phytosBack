import express from 'express';
//import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import PersonRoutes from '../modules/persons/application/routes.js';
import SeasonRoutes from '../modules/seasons/application/routes.js';
import ClientRoutes from '../modules/clients/application/routes.js';
import ProductRoutes from '../modules/products/application/routes.js';
import InstallationRoutes from '../modules/installations/application/routes.js';
import MapRoutes from '../modules/map/application/routes.js';
import CatastroMapRoutes from '../modules/map/application/catastro.routes.js';
import InstallationMapRoutes from '../modules/map/application/installation.routes.js';
import DashboardRoutes from '../modules/dashboard/application/routes.js';

const app = express();

// settings
app.set('port', 3000);
/*
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'bin')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'bin/index.html'));
    });
}
*/
// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use('/phytos/persons', PersonRoutes);
app.use('/phytos/seasons', SeasonRoutes);
app.use('/phytos/clients', ClientRoutes);
app.use('/phytos/products', ProductRoutes);
app.use('/phytos/installations', InstallationRoutes);
app.use('/phytos/map', MapRoutes);
app.use('/phytos/map', CatastroMapRoutes);
app.use('/phytos/map', InstallationMapRoutes);
app.use('/phytos/dashboard', DashboardRoutes);


export default app;
