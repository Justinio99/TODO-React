const initState = {
  
};

const ProjectReducer = (state = initState , action) =>{
    switch(action.type){
        case 'CREATE_PROJECT': console.log('CREATE_PROJECT',action.project)
        return state;
        case 'CREATE_PROJECT_ERROR': console.log('CREATE_PROJECT_ERROR', action.err)
        return state;
        default: 
        return state;
    }
 
}

export default ProjectReducer;