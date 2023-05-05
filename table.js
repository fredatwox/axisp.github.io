//import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://hxmeiqslsecbnzrqhcgu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4bWVpcXNsc2VjYm56cnFoY2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjcxMjgsImV4cCI6MTk5NjgwMzEyOH0.qFCmpQ-3hDLjdxkfFsIOdsZZuQK8UXMncvvJoDzcbRA')




async function preview() {

let { data, error } = await supabaseClient
  .from('Employee List')
  .select('*')

  console.log(data);

  let tableOutput ="<table width='1000px'>"
  tableOutput += `<tr>
                    
                    <td><b>Staff No</b></td>
                    <td><b>Appointment Start Date</b></td>
                    <td><b>TIN</b></td>
                    <td><b>SSNIT No</b></td>
                    <td><b>Date Of Birth</b></td>
                    <td><b>Title</b></td>
                    <td><b>Surname</b></td>
                    <td><b>Other names</b></td>
                    <td><b>Gender Code</b></td>
                    <td><b>MaritalStausCode</b></td>
                    <td><b>Cellphone</b></td>
                    <td><b>Email</b></td>
                    <td><b>Corresponding Address</b></td>
                    <td><b>PassportPhoto</b></td>
                    <td><b>Employment Date</b></td>
                    <td><b>Designation</b></td>
                    <td><b>Job Grade</b></td>
                    <td><b>Employee Type</b></td>
                    <td><b>Branch</b></td>
                    <td><b>Head Of Department Name</b></td>
                    <td><b>Contract Frequency Code</b></td>
                    <td><b>Contract Duration</b></td>
                    </tr>`

  for (let i = 0; i < data.length; i++) {
    let dataRow = data[i];
    let tableRow = `
    <tr>
    <td> ${dataRow["Staff No"]}</td>
    <td> ${dataRow["Appointment Start Date"]}</td>
    <td> ${dataRow["TIN"]}</td>
    <td> ${dataRow["SSNIT No"]}</td>
    <td> ${dataRow["Date Of Birth"]}</td>
    <td> ${dataRow["Title"]}</td>
    <td> ${dataRow["Surname"]}</td>
    <td> ${dataRow["Other names"]}</td>
    <td> ${dataRow["Gender Code"]}</td>
    <td> ${dataRow["Marital Status Code"]}</td>
    <td> ${dataRow["CellPhone"]}</td>
    <td> ${dataRow["Email"]}</td>
    <td> ${dataRow["Corresponding Address"]}</td>
    <td> ${dataRow["PassportPhoto"]}</td>
    <td> ${dataRow["Employment Date"]}</td>
    <td> ${dataRow["Designation"]}</td>
    <td> ${dataRow["Job Grade"]}</td>
    <td> ${dataRow["Employee Type"]}</td>
    <td> ${dataRow["Branch"]}</td>
    <td> ${dataRow["Head Of Department Name"]}</td>
    <td> ${dataRow["Contract Frequency Code"]}</td>
    <td> ${dataRow["Contract Duration"]}</td>
    </tr>
    `
    tableOutput += tableRow
    
  }

  tableOutput += "</table>"

   document.getElementById("employeeData").innerHTML=tableOutput;


    
}






