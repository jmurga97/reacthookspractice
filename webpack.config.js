// path es una instancia incluida por node.js
const path = require('path');
// html-webpack-plugin es el paquete instalado con anterioridad
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Se crea una instancia para el plugin de CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Aqui dentro iran todas las configuraciones usara webpack
module.exports = {
  // Se indica cual sera el archivo principal y donde estara
  entry: './src/index.js',
  // Se indica donde se guardara el proyecto o donde se compilara el resultado del bundle
  output: {
    // Con path.resolve se determina en que carpeta del entorno de desarrollo nos encontramos para luego enviar
    // el resultado a dist
    path: path.resolve(__dirname, 'dist'),
    // Como se llamara el resultado de la compilacion
    filename: 'bundle.js',
    publicPath: '/',
  },
  // Se indica que elementos adicionales tiene que analizar para compilar
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Se indica que modulos utilizara Webpack y bajo que reglas funcionara
  module: {
    // Estas reglas son elementos que detectaran los distintos tipos que contenga el proyecto por medio de loaders
    rules: [
      {
        // Uso de regepx para identificar las extensiones
        test: /\.(js|jsx)$/,
        // Que debera excluir webpack a la hora de compilar el proyecto
        exclude: /node_modules/,
        // Que loaders necesitara
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  // Con los plugins podemos optimizar la elaboracion de bundles ultraligeros para darle mayor performance a la App
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      historyApiFallback: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  // Configuracion para poner a prueba el servidor de desarrollo local. Con esto podremos observar los cambios con
  // npm run start
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    historyApiFallback: true,
    port: 3005,
  },
};
