
import supertest from "supertest";
import app from "../index";

//create request
const request = supertest(app)

describe('test basic endpoint server ',()=>{
    it('get /  endpoint ',async()=>{
        const res = await request.get('/')
       expect(res.status).toBe(200)
        
    })
})