import React from 'react';
import FilmDesc from '../components/FilmDesc/FilmDesc';
import { films } from '../data/Data';
import {useSelector} from "react-redux"

const AboutFilm = () => {
 const filmId = useSelector((store)=> store.filmId.filmId)
 
 return (
  <div>
   {films.filter((film) => film.id === filmId ).map((film) => <FilmDesc key={film.id} title={film.title} src={film.src} desc={film.desc}/>)}
  </div>
 );
};

export default AboutFilm;