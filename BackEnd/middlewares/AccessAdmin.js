const acessAdmin=(req,res,next)=>{
   if( req.user.role=='admin')
   {next()}
   else{res.status(400).send({msg:"not auth admin"})}
}