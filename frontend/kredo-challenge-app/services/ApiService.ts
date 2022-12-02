class ApiService {
    baseRoute: string;

    constructor() {
        this.baseRoute = 'https://localhost:7077/api/';
    }

    async getAllCategories() {
        try {
            let response = await fetch(this.baseRoute + 'category', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            let data = await response.json();

            return data;   

        } catch (error) {
            console.log(error);
        }
    }

    async getProductsByCategory(id: string) {
        try {
            let response = await fetch(this.baseRoute + 'category/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            let data = await response.json();

            return data;
            
        } catch (error) {
            console.log(error);
        }
    }

    async getProduct(id: string) {
        try {
            let response = await fetch(this.baseRoute + 'product/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            let data = await response.json();

            return data;
            
        } catch (error) {
            console.log(error);
        }
    }

}

const apiService = new ApiService();
export { apiService };