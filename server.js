const express = require('express');
const app = express();
const PORT = 8000;
// const router = require('router')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(express.static('./client'))

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes)

const clientRoutes = require('./routes/clinetRoutes');
app.use('/', clientRoutes);

app.listen(PORT, () => {
    console.log(`listing on http://localhost:${PORT}`);
})