export let get=async(url, option)=>{
    try {
      
    let response=await fetch(url,option);
    let data=await response.json();
    return data;
    } catch (error) {
      return false;
    }
    
  }