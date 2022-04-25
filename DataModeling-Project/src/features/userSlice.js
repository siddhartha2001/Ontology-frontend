import {createSlice} from '@reduxjs/toolkit';

// const [userRole,setUserRole] = useState(null)
const initialState = {

    User_Id:null,
    role: null,
    email:null,
    password:null,
    gender:null,
    first_name:null,
    last_name:null,
    dob:null,
    phone:null,


    url:null,
    cname:null,
    desc:null,


    job_desc:null,
    job_title:null,
    job_type:null,
    salary:null,
    currency:null,
    loc_city:null,
    loc_country:null,
    loc_state:null,
    loc_zip:null,
    loc_street_name:null,

    prev_company:null,
    start_date:null,
    end_date:null,

    cgpa:null,
    certificate:null,
    major:null,
    university:null

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action) => {
            // setUserName(action.payload)

            state.User_Id   = action.payload.User_Id;
            state.role      = action.payload.role;
            state.email     = action.payload.email;
            state.password  = action.payload.password;
            state.gender    = action.payload.gender;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.dob = action.payload.dob;
            state.phone = action.payload.phone;
        
        
            state.url = action.payload.url;
            state.cname = action.payload.cname;
            state.desc = action.payload.desc;
        
        
            state.job_desc  = action.payload.job_desc;
            state.job_title = action.payload.job_title;
            state.job_type  = action.payload.job_type;
            state.salary = action.payload.salary;
            state.currency = action.payload.currency;
            state.loc_city = action.payload.loc_city;
            state.loc_country = action.payload.loc_country;
            state.loc_state = action.payload.loc_state;
            state.loc_zip = action.payload.loc_zip;
            state.loc_street_name = action.payload.loc_street_name;
        
            state.prev_company = action.payload.prev_company;
            state.start_date = action.payload.start_date;
            state.end_date = action.payload.end_date;
        
            state.cgpa = action.payload.cgpa;
            state.certificate = action.payload.certificate;
            state.major = action.payload.major;
            state.university = action.payload.university;
        },
        logout: (state) => {
             // setUserName(action.payload)
             state.User_Id   = null;
             state.role          = null;
             state.email         = null;
             state.password      = null;
             state.gender        = null;
             state.first_name    = null;
             state.last_name     = null;
             state.dob           = null;
             state.phone         = null;
         
         
             state.url = null;
             state.cname = null;
             state.desc = null;
         
         
             state.job_desc  = null;
             state.job_title = null;
             state.job_type  = null;
             state.salary    = null;
             state.currency  = null;
             state.loc_city  = null;
             state.loc_country = null;
             state.loc_state = null;
             state.loc_zip = null;
             state.loc_street_name  = null;
         
             state.prev_company  = null;
             state.start_date    = null;
             state.end_date      = null;
         
             state.cgpa          = null;
             state.certificate   = null;
             state.major         = null;
             state.university    = null;
        }
    }
});


export const {login,logout} = userSlice.actions;

 // setUserName(action.payload)

export const selectUser_Id = (state) => state.user.User_Id;
export const selectRole       = (state) => state.user.role;
export const selectEmail      = (state) => state.user.email;
export const selectPassword   = (state) => state.user.password;
export const selectGender     = (state) => state.user.gender;
export const selectFirst_name = (state) => state.user.first_name;
export const selectLast_name  = (state) => state.user.last_name;
export const selectDob        = (state) => state.user.dob;
export const selectPhone      = (state) => state.user.phone;


export const selectUrl = (state) => state.user.url;
export const selectCname = (state) => state.user.cname;
export const selectDesc = (state) => state.user.desc;


export const selectJob_desc  = (state) => state.user.job_desc;
export const selectJob_title = (state) => state.user.job_title;
export const selectJob_type  = (state) => state.user.job_type;
export const selectSalary    = (state) => state.user.salary;
export const selectCurrency  = (state) => state.user.currency;
export const selectLoc_city  = (state) => state.user.loc_city;
export const selectLoc_country = (state) => state.user.loc_country;
export const selectLoc_state = (state) => state.user.loc_state;
export const selectLoc_zip = (state) => state.user.loc_zip;
export const selectLoc_street_name  = (state) => state.user.loc_street_name;

export const selectPrev_company  = (state) => state.user.prev_company;
export const selectStart_date    = (state) => state.user.start_date;
export const selectEnd_date      = (state) => state.user.end_date;

export const selectCgpa          = (state) => state.user.cgpa;
export const selectCertificate   = (state) => state.user.certificate;
export const selectMajor         = (state) => state.user.major;
export const selectUniversity    = (state) => state.user.university;


export default userSlice.reducer;
