const fetchUsers=()=>{
    let usersObj=[];//usersObj=endRes
    fetch("http://localhost:3000/users").then(
        res=>{
            console.log(res.json()
            .then(endRes=>{console.log(endRes); return endRes}).catch(err=>console.log(err)))
        })
        .catch(err=>console.log(err))
    //console.log("userinfo",usersObj)
    }
    const fetchMembers=()=>{
        let usersObj=[];//usersObj=endRes
        fetch("http://localhost:3000/members").then(
            res=>{
                console.log(res.json()
                .then(endRes=>{console.log(endRes); return endRes}).catch(err=>console.log(err)))
            })
            .catch(err=>console.log(err))
        //console.log("userinfo",usersObj)
        }
    const insertMember=(users)=>{
        fetch("http://localhost:3000/members",{
            method:'POST',
            body:JSON.stringify(users),
            headers:{
                'content-type':'application/json'
            }
        }
        ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
            
        
    }
const insertUser=(users)=>{
    fetch("http://localhost:3000/users",{
        method:'POST',
        body:JSON.stringify(users),
        headers:{
            'content-type':'application/json'
        }
    }
    ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
        
    
}
const updateUser=(users,id)=>{
    fetch("http://localhost:3000/users/id",{
        method:'PUT',
        body:JSON.stringify(users),
        headers:{
            'content-type':'application/json'
        }
    }
    ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
        
}
const deleteUser=(id)=>{
    const apiUrl = `http://localhost:3000/users/${id}`;
    try{
        fetch (apiUrl, {
            method : "DELETE"
        }).then(data => {
           
            return data.json();
        }).then(data => console.log("data Successfully deleted"));
    }catch(err){
        console.log(err);
    }
}
export {fetchUsers, insertUser,deleteUser, fetchMembers,insertMember};