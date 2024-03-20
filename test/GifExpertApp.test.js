import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('GifExpertApp test', () => {
    test('default category init', () => { 

        render(<GifExpertApp />);
        expect(screen.getByRole("heading",{ level: 3 }).innerHTML).toBe('Dragon ball');
        expect(screen.getByRole("heading",{ level: 4 }).innerHTML).toBe('Cargando...');

     })


     test('change value in input', () => { 

        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        fireEvent.input(input,{ target:{
            value:'Dokuro chan'
        } });
        expect(input.value).toBe('Dokuro chan');
     })
});