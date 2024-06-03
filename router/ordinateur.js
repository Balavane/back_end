const express = require( 'express' );
const { PrismaClient } = require( '@prisma/client' );
const route = new express.Router();

const prisma = new PrismaClient



route.post( '/ordinateur', async ( req, res ) => {
    
    console.log('req.body')
    
  const ordinateur = await prisma.ordinateur.create({
      data: req.body
  });
  res.json(ordinateur);
})

route.get('/ordinateur', async (req, res)=>  {
  const ordinateur = await prisma.ordinateur.findMany();
  res.json(ordinateur);
} )

route.put('/ordinateur', async (req, res)=>  {
  const updateOrdi = await prisma.ordinateur.update({
    where : { tag:req.body.tag},
    data: req.body,
  })
  res.json(updateOrdi)
  // You have updated a ordinateur
})
route.delete('/ordinateur', async (req, res)=>  {
  const deletedOrdi = await prisma.ordinateur.delete({
    where : { tag:req.body.tag}
  })  
  res.json(deletedOrdi)
  // You have deleted a ordinateur
})

module.exports = route
