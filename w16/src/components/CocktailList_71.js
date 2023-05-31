import React from 'react';
import Cocktail_71 from './Cocktail_71';
import Loading from './Loading_71';
import { useGlobalContext } from '../context_71';

const CocktailList_71 = () => {
  const {loading ,cocktails} =useGlobalContext(); 
  if(loading){
    return <Loading />
  }
  if (cocktails.length < 1){
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
          <h2 className="section-title">cocktails</h2>
          <div className="cocktails-center">
            {cocktails.map((item) => {
              return <Cocktail_71 key={item.id}{...item} />
            })}
  

          </div>
        </section>
  );
};

export default CocktailList_71;
