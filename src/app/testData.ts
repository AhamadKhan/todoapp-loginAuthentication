import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    createDb() {
        let bookDetails =[
            {id:100,name:'Angular by Ahmad',category:'Angular'},
            {id:101,name:'Java by Ahmad',category:'Java'},
            {id:100,name:'Springboot by Ahmad',category:'Springboot'}
        ];
        return {books:bookDetails};
    }
} 