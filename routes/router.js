const router = require("express").Router();

const employes = require("../controllers/Employes");

router.get('/get-all', employes.getEmployes);
router.get('/get-single/:id', employes.getSingleEmploye);
router.put('/updateEmploye/:id', employes.updateEmploye);
router.delete('/deleteEmploye/:id', employes.deleteEmploye);
router.post('/add-employe', employes.createEmploye);



module.exports = router;