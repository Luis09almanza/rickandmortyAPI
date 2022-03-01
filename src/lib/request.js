var randomNum = Math.floor(Math.random() * 20);

const URL = `https://rickandmortyapi.com/api/character/?page=${randomNum}`;

class Http{
    static instance = new Http()

    get_characters = async () =>{
        try {
            const request = await fetch(`${URL}`);
            const response = await request.json();
            return response
            
        } catch (err){
            throw Error(err);
        }
    }
}

export default Http;