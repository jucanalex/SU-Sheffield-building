var btn =document.querySelector('input');

btn.addEventListener('click',show);

function show()
{
    if(btn.value==='false')
        {
            btn.value='true';
            document.getElementById("dropdown-content").style.display="block";
           
        }
    else 
        {
            btn.value='false';
            document.getElementById("dropdown-content").style.display="none";
            
        }

}
function hide()
{
     document.getElementById("dropdown-content").style.display="none";
    btn.value = 'false';
}