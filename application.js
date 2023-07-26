const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("exercise-list")
    const exercise = document.querySelectorAll(".exercise")
    const ename = document.getElementsByTagName("h2")

    for (var i=0; i < ename.length; i++) 
    {
        let match = exercise[i].getElementsByTagName('h2')[0];

        if (match) 
        {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indeoxOf(searchbox) > -1) 
            {
                exercise[i].style.display = "";
            }
            else 
            {
                exercise[i].style.display = "none";
            }
        }
    }
    
}