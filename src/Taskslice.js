import { createSlice } from '@reduxjs/toolkit'
import  MyVerticallyCenteredModal from './Updatetask'
import React, { useState } from 'react'
const initialState={
    taskList:[],
    selectedTask:{}
}



export const tasksSlice = createSlice(
    
      {

        name: 'taskSlice',
        initialState,
        reducers:{
            addTaskToList:(state, action)=>{
                    const id=Math.random*100
                    let task={...action.payload,id}
                    state.taskList.push(task)
            },
            removeTaskFromList:(state,action)=>{
                
                    state.taskList=state.taskList.filter((task)=>task.name!== action.payload.name)
            },


            updateTaskInList: (state,action)=>{
                    state.taskList=state.taskList.map((task)=>
                        task.name===action.payload.name ? action.payload:task
                       
                    )
            },


            selectedTask: (state,action)=>{
                state.selectedTask=action.payload
            }
        }


    })

    export const {addTaskToList,removeTaskFromList,updateTaskInList,selectedTask}=tasksSlice.actions

    export default  tasksSlice.reducer ;


