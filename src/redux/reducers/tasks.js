export default (tasks = [] ,action) => {
    switch (action.type) {
        case "UPDATE":
            return tasks.map((task)=> task._id === action.payload._id ? action.payload : task);
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...tasks, action.payload];
        
        default:
            return tasks;
    }
}