const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriaRoutes = require('./routes/categoriaRoutes');
const estadoRoutes = require ('./routes/estadoRoutes')
const productosRoutes = require ('./routes/productosRoutes')
const rolesRoutes = require ('./routes/rolesRoutes')
const usuarioRoutes = require ('./routes/usuarioRoutes')
const ventasRoutes = require ('./routes/ventasRoutes')
const marcaRoutes = require ('./routes/marcaRoutes')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/categorias', categoriaRoutes);
app.use('/estados', estadoRoutes);
app.use('/productos', productosRoutes);
app.use('/roles', rolesRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/ventas', ventasRoutes);
app.use('/marcas', marcaRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
