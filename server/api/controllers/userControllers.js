const getUser = (req, res) => {
    
}

const addUser = (req, res, next) => {
    const userType = req.body.userType
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email

    if(!userType || !fname || !lname || !email){
        res.status(400)
        throw new Error("Please add something!")
    }

    res.status(200).json({
        firstName: fname,
        lastName: lname,
        userType,
        email
    })
}



module.exports = {
    addUser
}