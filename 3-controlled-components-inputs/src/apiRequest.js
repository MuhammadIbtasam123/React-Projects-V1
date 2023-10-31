
/*
    its a kind of utility function that have to use when we have to work with post/update/delete request.
*/
const apiRequest = async( url='',postobj=null,errMsg=null)=>{
 try{
    const response = await fetch(url,postobj)
    if(!response.ok) throw Error ('Reload the app..')
 }catch(err){
    errMsg = err.message
 }finally{
    return errMsg
 }
}

export default apiRequest