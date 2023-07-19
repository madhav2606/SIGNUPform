
count = 0;

function consoleprint(){
    count++;
    let nameinput = document.getElementById('name')
    console.log("Name:",nameinput.value);
    let mailinput = document.getElementById('mailid')
    console.log("Email:",mailinput.value);
    let password = document.getElementById('password')
    console.log("Password:",password.value);
    let phNum = document.getElementById('phNum')
    console.log("Phone Number:",phNum.value);    

   
    console.log("Number of registrations:",count);
}
function selectedSubjectName() {
    var subjectIdNode = document.getElementById('subjectName');
    var value =
    subjectIdNode.options[subjectIdNode.selectedIndex].text;
    console.log("Sport:" + value);
 }
 

document.querySelectorAll("input").forEach(item => {
    item.addEventListener("change", () => {
       console.log(item.value)
    })
})

function togglehide(){
    let container = document.getElementById('whole')
    // container.style.backgroundColor = 'grey'
    if(container.style.display!='none'){
        container.style.display = 'none';
    }
    else 
        container.style.display = "block"
}
const toggleSwitch =
    document.querySelector('.theme-slider input[type="checkbox"]');
  
/* Function to change theme */
function switchTheme(e) {
  
    /* Once checkbox is checked default theme change to dark */
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    }
  
    /* While page in dark mode and checkbox is 
    checked then theme back to change light*/
    else {
        document.documentElement.setAttribute('theme', 'light');
    }
}
  
toggleSwitch.addEventListener('change', switchTheme, false);