const express = require( 'express' );
const { PrismaClient } = require( '@prisma/client' );
const route = new express.Router();

const prisma = new PrismaClient


route.post( '/apprenant', async ( req, res ) => {
    
    console.log('req.body')
    
  const apprenant = await prisma.apprenant.create({
      data: req.body
  });
  res.json(apprenant);
})

route.get('/apprenant', async (req, res)=>  {
  const apprenant = await prisma.apprenant.findMany();
  res.json(apprenant);
} )


route.put('/apprenant', async (req, res)=>  {
  const updatedapprenant = await prisma.apprenant.update({
    where : { matricule:req.body.matricule},
    data: req.body,
  })
  res.json(updatedapprenant)
  // You have updated a apprenant
})
route.delete('/apprenant', async (req, res)=>  {
  const deletedapprenant = await prisma.apprenant.delete({
    where : { matricule:req.body.matricule}
  })  
  res.json(deletedapprenant)
  // You have deleted a apprenant
} )


module.exports = route