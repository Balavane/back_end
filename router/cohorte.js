const express = require( 'express' );
const { PrismaClient } = require( '@prisma/client' );
const route = new express.Router();

const prisma = new PrismaClient



route.post( '/cohorte', async ( req, res ) => {
    
    console.log('req.body')
    
  const cohorte = await prisma.cohorte.create({
      data: req.body
  });
  res.json(cohorte);
})

route.get('/cohorte', async (req, res)=>  {
  const cohorte = await prisma.cohorte.findMany();
  res.json(cohorte);
} )

route.put('/cohorte', async (req, res)=>  {
  const updatedCohorte = await prisma.cohorte.update({
    where : { code:req.body.code},
    data: req.body,
  })
  res.json(updatedCohorte)
  // You have updated a cohorte
})
route.delete('/cohorte', async (req, res)=>  {
  const deletedCohorte = await prisma.cohorte.delete({
    where : { code:req.body.code}
  })  
  res.json(deletedCohorte)
  // You have deleted a cohorte
})

module.exports = route