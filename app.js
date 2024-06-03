const express = require('express');
const { PrismaClient } = require( '@prisma/client' );

const newRouteS = require( './router/sesson' )
const newRouteA = require( './router/apprenant' )
const newRouteC = require( './router/coach' )
const newRouteCo = require( './router/cohorte' )
const newRouteO = require('./router/ordinateur')
const app = express();
const prisma = new PrismaClient

app.use( express.json() );
const port = process.env.PORT || 8001;

app.get( '/', ( req, res ) => {
    res.json( {
        'nom': 'balavane',
        'postNom': 'daniel'
    })
} )
app.use( newRouteS )
app.use( newRouteA )
app.use( newRouteC )
app.use( newRouteCo )
app.use(newRouteO)


app.listen( port, () => console.log( `Nous sommes sur le port http://localhost:${ port }` ) );