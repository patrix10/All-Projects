//import email from /model/email.js

export const savesentemails=(req,res)=> {
    try {
        const email = new email(req.body)
        email.save()
        res.status(200).json('email saved')
    } catch (error) {
        res.status(500).json(error.message)
    }
}