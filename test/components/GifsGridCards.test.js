import { render, screen } from "@testing-library/react";
import { GifsGridCard } from "../../src/components/GifsGridCard";

describe('Testting GifsGridCards ', () => {

    const title = 'Dokuro chan';
    const img = 'http://dokurochan.com/dokurochan.jpg';

    test('GifsGridCards snapshot', () => {

        const { container } = render(<GifsGridCard title={title} img={img} />);
        expect(container).toMatchSnapshot();

     })


     test('IMG render with alt attr', () => { 
        
        render(<GifsGridCard title={title} img={img} />);
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(img);
        expect(alt).toBe(title);
        
      })
});