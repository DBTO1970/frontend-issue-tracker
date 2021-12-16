const colors = ["#b33a3a", "#ff6700", "#32cd32"];

const PriorityController = (priority) =>{
    const levels = ["High", "Medium", "Low"];
    return (

        {level: levels[priority - 1],
        color: colors[priority - 1]}

        
    )
}

export default PriorityController;