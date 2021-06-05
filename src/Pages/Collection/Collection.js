import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../Components/CollectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './Collection.styles';


const CollectionPage = ({ collection }) => { 
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items && items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}      
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.colletionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);