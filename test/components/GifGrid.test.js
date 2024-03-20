import { screen, render } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import { UseFetchGifs } from "../../src/hooks/UseFetchGifs";

jest.mock('../../src/hooks/UseFetchGifs');

describe('GifGrid tes', () => {

    const category = 'Dokuro chan';

    test('GifGrid show loading', () => { 

        UseFetchGifs.mockReturnValue({
            gifs: [],
            isloading: true
        });

        render(< GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
     })

     test('GifGrid show gifs', () => { 

        const gifs = [
            {
                id: 'abc',
                title: 'Dokuro chan',
                imgurl: 'http://animes.com/dokurochan.jpg'       
            },
            {
                id: 'cde',
                title: 'Goku',
                imgurl: 'http://animes.com/goku.jpg'        
            }
        ]

        UseFetchGifs.mockReturnValue({
            gifs: gifs,
            isloading: true
        });

        render(< GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
        
     })
});