const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());

// Обслуговування статичних файлів з папки build (папка, куди збирається React-додаток)
app.use(express.static(path.join(__dirname, 'build')));

// Всі запити перенаправляються на ваш React-додаток
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
