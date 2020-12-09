app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.port || 80
app.listen(port, () => console.log(`listening at http://localhost:${port}`))