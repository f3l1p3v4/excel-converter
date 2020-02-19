'use strict'

const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');

const app = express();

app.use(cors());
app.use(express.json());

//Pega dados do excel e converte para json e envia para o frontEnd
app.get('/events', async function (req, res) {
    const workbook = XLSX.readFile('telemetryData.xlsx');
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    res.json(xlData);
});

app.listen(3400);

