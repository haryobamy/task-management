import * as api from "../../api";


export const getTasks = () => async (dispatch) => {

    try {
        const {data} = await api.fetchTasks();
        dispatch({type : 'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error.message)
    }

    
}


export const createTask = (task) => async (dispatch) => {

    try {
        const {data} = await api.createTask(task);
        dispatch({type : 'CREATE', payload:data});
    } catch (error) {
        console.log(error.message)
    }   
}

export const updateTask = (id, task) => async (dispatch) => {
    try {
     const {data} =  await api.updateTask(id, task);
     dispatch({type : 'UPDATE', payload:data});
    } catch (error) {
        console.log(error.message)
    }
}