import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../UseGoogleSearch';
// import response from '../../Response';
import { Link } from 'react-router-dom';
import Search from '../../Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
//https://developers.google.com/custom-search/v1/using_rest
//https://cse.google.com/cse/create/new

function SearchPage() {
   const [{term}] = useStateValue();

   // Live API CALL
   const {data} = useGoogleSearch(term);

   // Mock API CALL
   // const data = response;

   return (
      <div className="searchPage">
         <div className="searchPage__header">
            <Link to="/">
               <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                  alt="Googe" 
                  className="searchPage__logo"
               />
            </Link>
            <div className="searchPage__headerBody">
               <Search hideButtons />
               <div className="searchPage__options">
                  <div className="searchPage__optionsLeft">
                     <div className="searchPage__option">
                        <SearchIcon />
                        <Link to="/all">All</Link>
                     </div>
                     <div className="searchPage__option">
                        <ImageOutlinedIcon />
                        <Link to="/images">Images</Link>
                     </div>
                     <div className="searchPage__option">
                        <DescriptionOutlinedIcon />
                        <Link to="/news">News</Link>
                     </div>
                     <div className="searchPage__option">
                        <RoomOutlinedIcon />
                        <Link to="/maps">Maps</Link>
                     </div>
                     <div className="searchPage__option">
                        <LocalOfferOutlinedIcon />
                        <Link to="/shopping">Shopping</Link>
                     </div>
                     <div className="searchPage__option">
                        <MoreVertIcon />
                        <Link to="/more">More</Link>
                     </div>
                  </div>
                  <div className="searchPage__optionsRight">
                     <div className="searchPage__option">
                        <Link to="/settings">Settings</Link>
                     </div>
                     <div className="searchPage__option">
                        <Link to="/tools">Tools</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {term && (
            <div className="searchPage__results">
               <p className="searchPage__resultCount">
                  About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
               </p>

               {data?.items.map(item => (
                  <div key={item?.cacheId || item.link} className="searchPage__result">
                     <a className="searchPage__resultLink" href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                           <img 
                              src={item.pagemap?.cse_image[0]?.src} 
                              alt="" 
                              className="searchPage__resultImage"
                           />
                        )}
                        {item.displayLink} <ArrowDropDownSharpIcon fontSize="large" />
                     </a>
                     <a className="searchPage__resultTitle" href={item.link}>
                        <h2>{item.title}</h2>
                     </a>
                     <p className="searchPage__resultSnippet">{item.snippet}</p>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

export default SearchPage;