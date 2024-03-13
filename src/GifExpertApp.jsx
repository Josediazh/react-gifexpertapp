import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);
    const onAddcategory = (NewCategory)=>{
      if (categories.includes(NewCategory))  return;
      setCategories(cate => [NewCategory,...cate] )
        
    }

  return (
    <>
    <h1>GiftExpertApp</h1>
    <AddCategory onNewCategory = {onAddcategory} />
    {
      categories.map( category => {  
          return < GifGrid key={category} category={category} />
      })
    }
    </>
  )
}
