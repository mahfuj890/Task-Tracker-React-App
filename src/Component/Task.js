


function Task({task,onDelete,onToggle}) {

    return (
        <div className= {`task ${task.reminder ? "reminder":"" }`}  onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <span style={{color:"red",cursor:"pointer"}} onClick={ ()=>onDelete(task.id)  }>&#215;</span> </h3>
            <p>{task.day} </p>

        </div>
    )
}

export default Task
