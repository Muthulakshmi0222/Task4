const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all");
    xhr.responseType="json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
        for (let blog of blogs){
            console.log(blog.name);
            console.log(blog.region);
            console.log(blog.subregion);
            }
    };

      xhr.send();
    };
    getBlogs();