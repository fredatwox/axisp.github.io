// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://hxmeiqslsecbnzrqhcgu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4bWVpcXNsc2VjYm56cnFoY2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjcxMjgsImV4cCI6MTk5NjgwMzEyOH0.qFCmpQ-3hDLjdxkfFsIOdsZZuQK8UXMncvvJoDzcbRA')


async function insertData() {
    let staffNumber = document.getElementById("staffNo").value
    let appstart = document.getElementById("Appstartdate").value
    let tinNumber = document.getElementById("tin").value
    let ssnitNumber = document.getElementById("ssnitNo").value
    let dateofBirth = document.getElementById("dateofbirth").value
    let title = document.getElementById("title").value
    let surname = document.getElementById("surname").value
    let otherNames = document.getElementById("othernames").value
    let genderCode = document.getElementById("gendercode").value
    let maritalstatusCode = document.getElementById("maritalstatuscode").value
    let cellNumber = document.getElementById("cellphone").value
    let email = document.getElementById("email").value
    let correspondingAdd = document.getElementById("Correspondingaddress").value
    let passport = document.getElementById("passportphoto").value
    let employed = document.getElementById("employeddate").value
    let designation = document.getElementById("designation").value
    let jobgrade = document.getElementById("jobgrade").value
    let employee = document.getElementById("employeetype").value
    let branch = document.getElementById("branch").value
    let hodname = document.getElementById("hodname").value
    let contract = document.getElementById("cfcode").value
    let contractd = document.getElementById("contractd").value 
    
   
    let info = { 
        "Staff No": staffNumber, 
        "Appointment Start Date": appstart,
        "TIN": tinNumber,
        "SSNIT No": ssnitNumber,
        "Date Of Birth": dateofBirth,
        "Title": title,
        "Surname": surname,
        "Other names": otherNames,
        "Gender Code": genderCode,
        "Marital Status Code": maritalstatusCode,
        "CellPhone": cellNumber,
        "Email": email,
        "Corresponding Address": correspondingAdd,
        "PassportPhoto": passport,
        "Employment Date": employed,
        "Designation": designation,
        "Job Grade": jobgrade,
        "Employee Type": employee,
        "Branch": branch,
        "Head Of Department Name": hodname,
        "Contract Frequency Code": contract,
        "Contract Duration": contractd

        
         
    }

    console.log(info)

    const { data, error } = await supabaseClient
        .from('Employee List')
        .insert(info)
        .select();

   
      
    if (data) {
        
        console.log(data);
        alert("Submitted successfully")
        
    }
    if(error){
        console.log(error);
        alert("Could not submit Form")
    }

    

   

}