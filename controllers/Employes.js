const Emp = require("../model/EmpModal");

const getEmployes = (req, res) => {
    Emp.find((err, employes) => {
        if (err) {
            res.send(err);
        }
        res.json(employes);
    });
};

const createEmploye = (req, res) => {
    const employe = new Emp({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailID: req.body.emailID,
        mobileNumber: req.body.mobileNumber,
        address: req.body.address,
        city: req.body.city,
        gender: req.body.gender
    });

    employe.save((err, employe) => {
        if (err) {
            res.send(err);
        }
        res.json(employe);
    });
};

const getSingleEmploye = (req, res) => {
    Emp.findOne({ _id: req.params.id }, (err, employe) => {
        if (err) {
            res.send(err);
        }
        res.json(employe);
    });
};

const updateEmploye = (req, res) => {
    Emp.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailID: req.body.emailID,
                mobileNumber: req.body.mobileNumber,
                address: req.body.address,
                city: req.body.city,
                gender: req.body.gender
            }
        }, { new: true },
        (err, Emp) => {
            if (err) {
                res.send(err);
            } else res.json(Emp);
        }
    );
};


const deleteEmploye = (req, res) => {
    Emp.deleteOne({ _id: req.params.id })
        .then(() => res.json({ message: "Emp Deleted" }))
        .catch(err => res.send(err));
};

module.exports = {
    getEmployes,
    createEmploye,
    updateEmploye,
    deleteEmploye,
    getSingleEmploye
};