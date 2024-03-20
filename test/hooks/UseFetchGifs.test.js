import { renderHook, waitFor } from "@testing-library/react";
import { UseFetchGifs } from "../../src/hooks/UseFetchGifs";

describe('UseFetchGifs test', () => {

    const category = 'Dokuro chan';

    test('return state default', () => { 

         const { result } = renderHook( () => UseFetchGifs(category) );
         const {gifs,isloading} = result.current;

         expect(gifs.length).toBe(0);
         expect(isloading).toBe(true);
     })


     test('return gifs array and isloading false', async() => { 

        const { result } = renderHook( () => UseFetchGifs(category) );
        await waitFor(
           () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )
        const {gifs,isloading} = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(isloading).toBeFalsy();
    })
    
});