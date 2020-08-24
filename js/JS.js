let inputFilter = document.getElementById('inputFilter');

inputFilter.addEventListener('keyup', filterNames);

function filterNames()
{
    let filterValue = document.getElementById('inputFilter').value.toUpperCase();
    let ul = document.getElementById('names');

    let li = ul.querySelectorAll('li.text-danger');

    for(let i = 0 ; i < li.length; i++ )
    {
        let a  = li[i].getElementsByTagName('a')[0]; 

    if(a.innerHTML.toUpperCase().indexOf(filterValue))
    {
        li[i].style.display = "none";
    }
    else
    {
        li[i].style.display = "";
    }
    }




}