export default async function carregarAPI(){
    try{
        const response = await fetch('https://api.github.com/users/marcos-vsg95/repos');

        if(!response.ok) throw new Error('Erro HTTP: ' + response.status);

        return await response.json();
    }
    catch(error){
        console.log(error);
        throw error;
    }
} 
