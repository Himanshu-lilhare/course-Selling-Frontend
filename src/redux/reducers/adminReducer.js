import { createReducer } from "@reduxjs/toolkit";

    

   export const adminReducer=createReducer({users:[]},{
     
    getStatsRequest:(state)=>{
        state.loading=true
    },

    getStatsSuccess:(state,action)=>{
        state.loading=false
        state.stats=action.payload.stats
        state.viewscount=action.payload.viewscount
        state.subscriptioncount=action.payload.subscriptioncount
        state.usercount=action.payload.usercount
        state.userpercentage=action.payload.userpercentage
        state.subscriptionpercentage=action.payload.subscriptionpercentage
        state.viewspercentage=action.payload.viewspercentage
        state.userprofit=action.payload.userprofit
        state.subscriptionprofit=action.payload.subscriptionprofit
        state.viewsprofit=action.payload.viewsprofit

    },
    getStatsFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    getAllUsersRequest:(state)=>{
        state.loading=true
    },
    getAllUsersSuccess:(state,action)=>{
        state.loading=false
        state.users=action.payload
    },
    getAllUsersFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    deleteUsersRequest:(state)=>{
        state.loading=true
    },
    deleteUsersSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    deleteUsersFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    updateUsersRequest:(state)=>{
        state.loading=true
    },
    updateUsersSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    updateUsersFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    createCourseRequest:(state)=>{
        state.loading=true
    },
    createCourseSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    createCourseFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    deleteCourseRequest:(state)=>{
        state.loading=true
    },
    deleteCourseSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    deleteCourseFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    createLectureRequest:(state)=>{
        state.loading=true
    },
    createLectureSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    createLectureFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    // deleteLectureRequest:(state)=>{
    //     state.loading=true
    // },
    // deleteLectureSuccess:(state,action)=>{
    //     state.loading=false
    //     state.message=action.payload
    // },
    // deleteLectureFail:(state,action)=>{
    //     state.loading=false
    //     state.error=action.payload
    // },
    clearmessage:(state)=>{
        state.message=null
    },
    clearerror:(state)=>{
        state.error=null
    }

   })

  export const lectureReducer =createReducer({users:[]},{
     
  
    deleteLectureRequest:(state)=>{
        state.loading=true
    },
    deleteLectureSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    deleteLectureFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    clearmessage:(state)=>{
        state.message=null
    },
    clearerror:(state)=>{
        state.error=null
    }

   })