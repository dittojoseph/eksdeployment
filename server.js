import express from 'express';


const PORT = 8080;
const HOST = '0.0.0.0';


const app = express();
app.get('/', (req, res) => {
  res.send('Deployed EKS APP through Jenkins CICD v2')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
