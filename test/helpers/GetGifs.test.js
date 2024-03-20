import { getGifs } from "../../src/helpers/GetGifs";

describe('function GetGifs test', () => {

    const category = 'Dokuro chan';

    test('GetGifs return arr', async () => { 

        const gifs = await getGifs(category);
        expect(typeof gifs).toEqual('object');
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            imgurl: expect.any(String)
        });

     })
    
});