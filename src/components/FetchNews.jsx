var newsDataFromDB = [{}];

async function fetchNewsDB(){
    const res = await fetch('http://localhost:3001/api/news',{
        method: 'GET',
    });
    newsDataFromDB = await res.json();
    console.log(newsDataFromDB); 
}

fetchNewsDB();

export default newsDataFromDB;