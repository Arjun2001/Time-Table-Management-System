
  
var tableData = {
    Admin: {
        columns: [
        { title: 'Admin_ID', field: 'admin_id', type:'numeric' },
        { title: 'admin_dept', field: 'admin_dept' },
        { title: 'admin_email', field: 'admin_email' }
      ],
      data: [
        { admin_id:1, admin_dept: 'Kishore',admin_email:'abc@123.com' },
        { admin_id:2, admin_dept: 'Sita',admin_email:'efgh@567.com'}
      ]
    },
    Faculty: {
        columns: [
            { title: 'ID', field: 'id', type:'numeric' },
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'email' },
            { title: 'Subject', field: 'sub' },
            { title: 'Phone Number', field: 'number', type: 'numeric' },
          ],
          data: [
            { id:1, name: 'Kishore',email:'abc@123.com', sub:'Maths', number:9988776655 },
            { id:2, name: 'Sita',email:'efgh@567.com', sub:'DBMS', number:9456676655 }
          ]
    },
    Student: {
      columns: [
        { title: 'Student ID', field: 'id', type:'numeric' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Year of join', field: 'year', type: 'numeric' },
        { title: 'Semester', field: 'semester', type: 'numeric' },
        { title: 'Branch', field: 'branch' }
      ],
      data: [
      ]
    },
    Department: {
      columns: [
        { title: 'Department ID', field: 'DEP_id', type:'numeric' },
        { title: 'Department Name', field: 'NAME' }
      ],
      data: [
      ]
    },
    Faculty_Replacement: {
      columns: [
        { title: 'Replacement No', field: 'replacement_no', type:'numeric' },
        { title: 'Old ID', field: 'old_id', type:'numeric' },
        { title: 'New ID', field: 'new_id', type:'numeric' },
        { title: 'From Date', field: 'from_date', type: 'date' },
        { title: 'TO date', field: 'to_date', type: 'date' }
      ],
      data: [
      ]
    },
    Lab: {
      columns: [
        { title: 'Lab ID', field: 'lab_id', type:'numeric' },
        { title: 'Credits', field: 'credits', type:'numeric' },
        { title: 'Department Id', field: 'dep_id', type: 'numeric' },
        { title: 'Faculty_Id', field: 'fac_id', type: 'numeric' }
      ],
      data: [
      ]
    },
    Course: {
      columns: [
        { title: 'Course Code', field: 'course_code', type:'numeric' },
        { title: 'Course Name', field: 'course_name' },
        { title: 'Course Credits', field: 'course_credits', type: 'numeric' }
      ],
      data: [
      ]
    },
    Class: {
      columns: [
        { title: 'Room No', field: 'room_no', type:'numeric' },
        { title: 'Department ID', field: 'dep_id', type:'numeric' },
        { title: 'Batch', field: 'batch' },
        { title: 'Section', field: 'section' }
      ],
      data: [
      ]
    },
    Phone_Details: {
      columns: [
        { title: 'TimeTable Id', field: 'timetable_id', type:'numeric' },
        { title: 'Faculty Phone No', field: 'fac_phone_no', type:'numeric' }
      ],
      data: [
      ]
    },
    Time_Table: {
      columns: [
        { title: 'TimeTable Id', field: 'timetable_id', type:'numeric' },
        { title: 'Admin ID', field: 'admin_id', type:'numeric' },
        { title: 'Student ID', field: 'student_id', type:'numeric' },
        { title: 'Faculty ID', field: 'fac_id', type:'numeric' },
        { title: 'Department ID', field: 'dep_id', type:'numeric' },
        { title: 'Lab ID', field: 'lab_id', type:'numeric' },
        { title: 'Replacement No', field: 'replacement_no', type:'numeric' },
        { title: 'Course Code', field: 'course_code', type:'numeric' },
        { title: 'Room No', field: 'room_no', type:'numeric' }
      ],
      data: [
      ]
    },
    
};

module.exports  = tableData;