const express = require( 'express' );
const { PrismaClient } = require( '@prisma/client' );
const route = new express.Router();

const prisma = new PrismaClient





route.post( '/session', async ( req, res ) => {
    
    console.log('req.body')
    
  const session = await prisma.session.create({
      data: req.body
  });
  res.json(session);
})

route.get('/session', async (req, res)=>  {
  const session = await prisma.session.findMany();
  res.json(session);
} )

route.put('/session', async (req, res)=>  {
  const updatedsession = await prisma.session.update({
    where : { id:req.body.id},
    data: req.body,
  })
  res.json(updatedsession)
  // You have updated a session
})
route.delete('/session', async (req, res)=>  {
  const deletedSession = await prisma.session.delete({
    where : { id:req.body.id}
  })  
  res.json(deletedSession)
  // You have deleted a session
})

module.exports = route