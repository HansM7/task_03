import fs from "fs"

export class Conteiner{
    constructor(){
        this.file="data.txt"
    }

    async getMany(){
        try {
            if (fs.existsSync(this.file)) {
                let allData=await fs.promises.readFile(this.file, 'utf-8')
                let dataJson=JSON.parse(allData)
                return dataJson
            }else{
                throw Error("Sorry, the file don't exist")
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getRandom(){
        try {
            if (fs.existsSync(this.file)) {
                const allData = await fs.promises.readFile(this.file, 'utf-8')
                const dataJson = JSON.parse(allData)
                const dataLenght = dataJson.length
                const min = 1
                const max = dataLenght

                let numRandom=Math.floor((Math.random()* (max - min + 1)) + min)

                return dataJson[numRandom-1]

            }else{
                throw Error("Sorry, the file don't exist")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}
