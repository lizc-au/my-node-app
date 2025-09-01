const express=require('express'); const cors=require('cors'); const app=express(); app.use(cors()); app.use(express.json()); app.get('/',(req,res)=>res.send('Hello Express!')); app.get('/api/health',(req,res)=>res.json({ ok: true })); app.listen(3000,()=>console.log('Server running on http://localhost:3000'));
app.post('/api/echo',(req,res)=>res.json({ youSent: req.body }));
