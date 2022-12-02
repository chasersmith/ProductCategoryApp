import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';

import { apiService } from '../services/ApiService';
import ProductCard from '../components/ProductCard';
import List from '../components/List';
import * as models from '../models';

export default function Home() {
  
  const noItemPlaceholder: models.Product = {id:"", categoryId:"", name: "No item selected", description:"", price: 0};

  // Use states for category and product so UI can be updated
  let [disableActive, setDisableActive] = useState<boolean>(false);
  let [categories, setCategories] = useState<models.Category[]>([ {name:"Loading", id:""}] );
  let [products, setProducts] = useState<models.Product[]>([
    {id:"", categoryId:"", name: "No category selected", description:"", price: 0}
  ]);
  let [selectedProduct, setSelectedProduct] = useState<models.Product>(
    {id:"", categoryId:"", name: "No item selected", description:"", price: 0}
  );

  // Get all categories (using useEffect so that API call is only done once)
  useEffect(() => {
    apiService.getAllCategories().then((res)=>{
      setCategories(res);
      categorySelected(res[0].id);
    });
  }, []);
  
  // Events that are called when category or product is selected in List component
  function categorySelected(id: string) {
    apiService.getProductsByCategory(id).then((res)=>{
      setProducts(res);

      // Clear product info and selection when selecting new category
      setSelectedProduct(noItemPlaceholder);
      setDisableActive(true);
    });
  }

  function productSelected(id: string) {
    apiService.getProduct(id).then((res)=>{
      setDisableActive(false);
      setSelectedProduct(res);
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Product/Category REST API App</title>
        <meta name="description" content="Kredo Coding Challenge by Chase Smith" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='d-flex justify-content-center p-3 bg-dark text-white'>
        <h3>Kredo Coding Challenge</h3>
      </header> 
      
      <main className={styles.main}>
        <div className='container'>
          <div className="row">

            <div className="col-sm-3">
              <h4 className='py-3'>Categories</h4>
              <List
                list={categories}
                itemSelected={categorySelected}
              />
            </div>

            <div className="col-sm-6">
              <h4 className='py-3'>Products</h4>
              <List
                list={products}
                itemSelected={productSelected}
                disableActive={disableActive}
              />
            </div>

            <div className="col-sm-3">
              <h4 className='py-3'>Product Info</h4>
              <ProductCard
                item={selectedProduct}/>
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}
