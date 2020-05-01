// Dependencies
import React, { Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';

// Components
import HeaderContainer from '../../containers/header-container';
import Row from '../semantic-components/row';
import NewsSlider from '../const-components/news-slider';
import TypeListContainer from '../../containers/type-list-container';
import MainPage from '../semantic-components/main-page';
import StartSection from '../const-components/start-section';
import GoodsListContainer from '../../containers/goods-list-container';
import UnusualSectionContainer from '../../containers/unusual-section-container';
import GoodDescriptionContainer from '../../containers/good-description-container';
import CartContainer from '../../containers/cart-container';

// Styles
import '../const-components/news-slider/news-slider.css';
import '../const-components/start-section/start-section.css';
import '../const-components/type-list/type-list.css';
import '../description-pages/description.css';
import '../goods-list/goods-list.css';
import '../goods-list-item/goods-list-item.css';
import '../header-components/header/header.css';
import '../semantic-components/main-page/main-page.css';
import '../semantic-components/row/row.css';
import '../semantic-components/spinner/spinner.css';
import '../unusual-section/unusual-section.css';


const App = ( ) => {

    return (
        <Fragment>
            <HeaderContainer />
            <Switch>
                <Route path='/' exact>
                    <Row left  = { <TypeListContainer /> }
                        center = { <MainPage render={ [ <NewsSlider key='1' />, <StartSection key='2'/>]  } />} 
                        right  = { <UnusualSectionContainer /> } />
                </Route>
                <Route path='/books' exact>
                    <Row left  = { <TypeListContainer /> }
                        center = { <GoodsListContainer/> } />
                </Route>
                <Route path='/games' exact>
                    <Row left  = { <TypeListContainer /> }
                        center = { <GoodsListContainer/> }/>
                </Route>
                <Route path='/movies' exact>
                    <Row left  = { <TypeListContainer /> }
                        center = { <GoodsListContainer/> }/>
                </Route>
                <Route path='/books/:id' render ={ ({match}) => {
                    return (
                        <Row left  = { <TypeListContainer />} 
                            center = { <GoodDescriptionContainer goodId = {match.params.id}  goodTopic='books'/> }/>  
                    )
                }} />
                <Route path='/games/:id' render ={ ({match}) => {
                    return (
                        <Row left  = { <TypeListContainer />} 
                            center = { <GoodDescriptionContainer goodId = {match.params.id}  goodTopic='games'/> }/>  
                    )
                }} />
                <Route path='/movies/:id' render ={ ({match}) => {
                    return (
                        <Row left  = { <TypeListContainer />} 
                            center = { <GoodDescriptionContainer goodId = {match.params.id}  goodTopic='movies'/> }/>  
                    )
                }} />

                <Route path='/cart' exact>
                    <Row left  = { <TypeListContainer /> }
                        center = { <CartContainer/> } />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default App;