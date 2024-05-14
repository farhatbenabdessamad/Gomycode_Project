const mongoose=require('mongoose')
const config = async() =>{
    try {
        await mongoose.connect("mongodb+srv://farhatbenabdessamad:p8najbPyPrr81Bfl@cluster0.qdsc7v1.mongodb.net/organization?retryWrites=true&w=majority&appName=Cluster0")
        console.log('database is connected')
    } catch (error) {
       console.log(error)
    }
}
module.exports=config