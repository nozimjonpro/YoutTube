import React from "react";
import '../Gussie/Gussie.scss';
import usePhotos from '../../Hooks/usePhoto';
import Playist from "../Playist/Playist";
import { Link } from "react-router-dom";

function Home({isOpen, setIsOpen}) {

const [photos, setPhotos] = usePhotos()
  
  return (
    <section className="gussie">
     <div className="container">
        <ul className="gussie__list-top">
          {photos.length > 0 && (photos.splice(0, 6)).map((item)=><li className="gussie__item" key={item.id}>
              <Link className="gussie__link" to={'playist/' + item.id} onClick={()=>setIsOpen(true)}><img className="gussie__image" src={item.url} alt="Image" />
              <h4 className="gussie__heading">{item.title}</h4>
              <span>{Math.floor(Math.random() * 1000) + 'k' + ' ' +'views'}</span>
              </Link>
          </li>)
          }
        </ul>
        <ul className="gussie__list-middle">
          {photos.length > 0 && (photos.splice(6, 6)).map((item)=><li className="gussie__item" key={item.id}>
              <Link className="gussie__link" to={'playist/' + item.id} onClick={()=>setIsOpen(true)}><img className="gussie__image" src={item.url} alt="Image" />
              <h4 className="gussie__heading">{item.title}</h4>
              <span className="gussie__views">{Math.floor(Math.random() * 1000) + 'k' + ' ' +'views'}</span>
              <span className="gussie__time">{Math.floor(Math.random() * 10) + ' ' +'months ago'}</span>
              </Link>
          </li>)
          }
        </ul>
        <ul className="gussie__list-bottom">
          {photos.length > 0 && (photos.splice(12, 6)).map((item)=><li className="gussie__item" key={item.id}>
              <Link className="gussie__link"  to={'playist/' + item.id} onClick={()=>setIsOpen(true)}><img className="gussie__image" src={item.url} alt="Image" />
              <h4 className="gussie__heading">{item.title}</h4>
              <span className="gussie__views">{Math.floor(Math.random() * 1000) + 'k' + ' ' +'views'}</span>
              <span className="gussie__time">{Math.floor(Math.random() * 10) + ' ' +'months ago'}</span>
              </Link>
          </li>)
          }
        </ul>
        <ul className="gussie__list-bottom">
          {photos.length > 0 && (photos.splice(18, 96)).map((item)=><li className="gussie__item" key={item.id}>
              <Link className="gussie__link" to={'playist/' + item.id} onClick={()=>setIsOpen(true)}><img className="gussie__image" src={item.url} alt="Image" />
              <h4 className="gussie__heading">{item.title}</h4>
              <span className="gussie__views">{Math.floor(Math.random() * 1000) + 'k' + ' ' +'views'}</span>
              <span className="gussie__time">{Math.floor(Math.random() * 10) + ' ' +'months ago'}</span>
              </Link>
          </li>)
          }
        </ul>
     </div>
    </section>
  );
}

export default Home;
