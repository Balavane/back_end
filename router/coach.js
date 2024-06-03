const express = require( 'express' );
const { PrismaClient } = require( '@prisma/client' );
const route = new express.Router();

const prisma = new PrismaClient




route.post( '/coach', async ( req, res ) => {
    
    console.log('req.body')
    
  const coach = await prisma.coach.create({
      data: req.body
  });
  res.json(coach);
})

route.get('/coach', async (req, res)=>  {
  const coach = await prisma.coach.findMany();
  res.json(coach);
} )

route.put('/coach', async (req, res)=>  {
  const updatedCoach = await prisma.coach.update({
    where : { matricule:req.body.matricule},
    data: req.body,
  })
  res.json(updatedCoach)
  // You have updated a coach
})
route.delete('/coach', async (req, res)=>  {
  const deletedCoach = await prisma.coach.delete({
    where : { matricule:req.body.matricule}
  })  
  res.json(deletedCoach)
  // You have deleted a coach
})

module.exports = route