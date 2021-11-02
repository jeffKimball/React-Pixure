import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{                
        Authorization: 
            'Client-ID iS_E7L4A5qpnAhSAGFwf2KN9BaDUN4vogZUKsFLSH3A'            
    }
})