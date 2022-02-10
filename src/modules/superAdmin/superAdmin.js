const {addAdmin, allAdmin, deleteAdmin} = require('./model')

module.exports = {
    allAdmin: async(req, res) => {
        try {
            let AllAdmin = await allAdmin()
            res.status(200).send(AllAdmin)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addAdmin: async(req, res) => {
        try {
            let {admin_name, admin_password} = req.body
            await addAdmin(admin_name,admin_password)
            res.status(201).send('New admin is created!')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    deleteAdmin: async(req, res) => {
        try {
            let {admin_id} = req.body
            await deleteAdmin(admin_id)
            res.status(200).send('Admin is deleted successfully!')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}