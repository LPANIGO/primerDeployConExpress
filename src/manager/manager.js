import { existsSync, promises } from 'fs';


class Manager {
    constructor(path) {
        this.path = path;
    }

    getAll = async() => {
        try {
            if (existsSync(this.path)) {
                const fileData = await promises.readFile(this.path, 'utf-8');
                let productos = JSON.parse(fileData);
                return productos;
            } else {
                return [];
            }
        } catch(error) {
            console.log("No se puede leer: " + error);
        }
    }

    getById = async(idNumber) => {
        try {
            let productos = await this.getAll();
            let objeto = [];
            if (productos.length > 0) {
                for (let producto of productos) {
                    if (idNumber === producto.id) {
                        objeto = JSON.stringify(producto);
                    } 
                } 
            }
            return objeto
            
        } catch(error) {
            console.log("No se puede encontrar el producto: " + error)
        }
    }
}

export default Manager;