const express = require('express');
const router = express.Router();
module.exports = router;
let users = [
    {id:1, name:'Ani', email: 'ani123@gmail.com' },
    {id:2, name:'Banu', email:'banu234@gmail.com' },
    {id:3, name:'Cather', email:'cather345@gmail.com'},
    {id:4, name:'David', email:'david456@gmail.com'},
    {id:5, name:'Elango', email:'elango365@gmail.com'},
    {id:6, name:'Fahath', email:'fahath348@gmail.com'},
];

router.get('/', (req, res) => {
    res.json(users);
});
router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
});

router.delete('/:id', (req, res) => {
    users = users.filter(user => user.id !== parseInt(req.params.id));
    res.json({ message: "User deleted successfully" });
});

module.exports = router;
