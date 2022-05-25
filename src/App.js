import { useReducer, useRef } from "react";

const initial = {
  job: "",
  jobs: []
}
const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const DELETE_JOB = "delete_job"
const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}
const reduce = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      return {
        ...state,
        jobs: newJobs
      }
  
    default:
      throw new Error(`Invalid action ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = useReducer(reduce, initial)
  const {job, jobs} = state
  const handleAddJob = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))

    inputRef.current.focus()
  }
  const inputRef = useRef()
  return (
    <div className="App" style={{padding : 20}}>
      <input type="text" value={job} onChange={(e) => dispatch(setJob(e.target.value))} ref={inputRef}/>
      <button onClick={handleAddJob}>add</button>
      <ul>
        {jobs.map((job, index) => <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>)}
      </ul>
    </div>
  );
}

export default App;
