import React from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm';

var PRODUCTS = {
    '1': {id: 1, categoty: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
    '2': {id: 2, categoty: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpiscord'},
    '3': {id: 3, categoty: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
    '4': {id: 4, categoty: 'Furniture', price: '$799', stocked: true, name: 'Chaise lounge'},
    '5': {id: 5, categoty: 'Furniture', price: '$1300', stocked: false, name: 'Dining Table'},
    '6': {id: 6, categoty: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
};

class Products extends React.Component{
    constructor(props){
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.state = {
            filterText: '',
            inStockOnly: false,
            products: PRODUCTS
        };
    }

    handleFilter(filterInput){
        this.setState(filterInput);
    }
    render(){
        return (
            <div>
                <Filters 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    />
                <ProductTable 
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    />
                <ProductForm />
            </div>
        );
    }
}
export default Products;